'use server';
import { Advert, AdvertSchema } from '@/models';
import { auth } from '@/auth';
import { connectDBAction, getCollectionDb } from '@/lib';
import { deleteImagesImagekit, formatDataNewAdvert } from '@/services';
import { errorResponseAction, successResponseAction } from '@/utils-server';
import { revalidateTag } from 'next/cache';

export const newAdvert = connectDBAction(async (prevState: unknown, formData: FormData) => {
  const session = await auth();
  const data = Object.fromEntries(formData);

  if (!session) return errorResponseAction('Unauthorized');
  const userId = session.user.id;

  const dataForm = formatDataNewAdvert({ ...data, userId }, formData);

  const parsedData = AdvertSchema.omit({ views: true }).parse(dataForm);

  const advertsCol = getCollectionDb<Omit<Advert, 'views'>>('adverts');

  if (!advertsCol) return errorResponseAction('Internal server error');

  const result = await deleteImagesImagekit({
    checkIsOriginal: false,
    images: parsedData.deleteImages,
    userId: session.user.id,
  });

  if (result === false) return errorResponseAction('Internal server error');

  delete parsedData.deleteImages;
  delete parsedData.files;

  advertsCol.insertOne({
    ...parsedData,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  revalidateTag('advert', 'max');
  revalidateTag('adverts', 'max');
  return successResponseAction('Create advert successful');
});
