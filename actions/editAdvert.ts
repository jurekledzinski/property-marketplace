'use server';
import z from 'zod';
import { Advert, AdvertSchema } from '@/models';
import { auth } from '@/auth';
import { ObjectId } from 'mongodb';

import {
  connectDBAction,
  DataDB,
  deleteImagesImagekit,
  errorResponseAction,
  formatDataEditAdvert,
  getCollectionDb,
  successResponseAction,
} from '@/lib';

export const editAdvert = connectDBAction(
  async (prevState: unknown, formData: FormData) => {
    const session = await auth();
    const data = Object.fromEntries(formData);

    if (!session) return errorResponseAction('Unauthorized');
    const userId = session.user.id;

    const dataForm = formatDataEditAdvert({ ...data, userId }, formData);

    const parsedData = AdvertSchema.extend({ id: z.string() }).parse(dataForm);

    const advertsCol = getCollectionDb<DataDB<Advert>>('adverts');

    if (!advertsCol) return errorResponseAction('Internal server error');

    const result = await deleteImagesImagekit({
      checkIsOriginal: false,
      images: parsedData.deleteImages,
      userId: session.user.id,
      advertId: parsedData.id,
    });

    if (result === false) return errorResponseAction('Internal server error');

    delete parsedData.deleteImages;
    delete parsedData.state;
    delete parsedData.files;

    await advertsCol.updateOne(
      { _id: new ObjectId(parsedData.id) },
      { $set: { ...parsedData } }
    );

    return successResponseAction('Edit advert successful');
  }
);
