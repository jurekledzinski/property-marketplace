'use server';
import { Advert, AdvertSchema } from '@/models';
import { auth } from '@/auth';

import {
  connectDBAction,
  deleteImagesImagekit,
  errorResponseAction,
  formatDataNewAdvert,
  getCollectionDb,
  successResponseAction,
} from '@/lib';

export const newAdvert = connectDBAction(
  async (prevState: unknown, formData: FormData) => {
    const session = await auth();
    const data = Object.fromEntries(formData);

    if (!session) return errorResponseAction('Unauthorized');

    const dataForm = formatDataNewAdvert(data, formData);

    const parsedData = AdvertSchema.parse(dataForm);

    const advertCollection = getCollectionDb<Advert>('adverts');

    if (!advertCollection) {
      return errorResponseAction('Internal server error');
    }

    const result = await deleteImagesImagekit({
      checkIsOriginal: false,
      images: parsedData.deleteImages,
      userId: session.user.id,
    });

    if (result !== undefined && !result) {
      return errorResponseAction('Internal server error');
    }

    delete parsedData.deleteImages;
    delete parsedData.state;
    delete parsedData.files;

    advertCollection.insertOne({
      ...parsedData,
      createdAt: new Date(),
    });

    return successResponseAction('Create advert successful');
  }
);
