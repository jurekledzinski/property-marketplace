'use server';
import z from 'zod';
import { Advert, AdvertSchema } from '@/models';
import { auth } from '@/auth';
import { connectDBAction, DataDB, getCollectionDb } from '@/lib';
import { deleteImagesImagekit, formatDataEditAdvert } from '@/services';
import { errorResponseAction, successResponseAction } from '@/utils-server';
import { ObjectId } from 'mongodb';

export const editAdvert = connectDBAction(
  async (prevState: unknown, formData: FormData) => {
    const session = await auth();
    const data = Object.fromEntries(formData);

    if (!session) return errorResponseAction('Unauthorized');
    const userId = session.user.id;

    const dataForm = formatDataEditAdvert({ ...data, userId }, formData);

    const parsedData = AdvertSchema.extend({ id: z.string() })
      .omit({ views: true })
      .parse(dataForm);

    const advertsCol =
      getCollectionDb<DataDB<Omit<Advert, 'views'>>>('adverts');

    if (!advertsCol) return errorResponseAction('Internal server error');

    const result = await deleteImagesImagekit({
      checkIsOriginal: false,
      images: parsedData.deleteImages,
      userId: session.user.id,
      advertId: parsedData.id,
    });

    if (result === false) return errorResponseAction('Internal server error');

    delete parsedData.deleteImages;
    delete parsedData.files;

    await advertsCol.updateOne(
      { _id: new ObjectId(parsedData.id) },
      { $set: { ...parsedData, updatedAt: new Date() } }
    );

    return successResponseAction('Edit advert successful');
  }
);
