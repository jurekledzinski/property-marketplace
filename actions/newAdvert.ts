'use server';
import { Advert, AdvertSchema } from '@/models';

import {
  connectDBAction,
  deleteImagesImagekit,
  errorResponseAction,
  getCollectionDb,
  successResponseAction,
} from '@/lib';

import { auth } from '@/auth';

export const newAdvert = connectDBAction(
  async (prevState: unknown, formData: FormData) => {
    const session = await auth();
    const data = Object.fromEntries(formData);

    if (!session) return errorResponseAction('Unauthorized');

    const dataForm = {
      ...data,
      price: data.price,
      year: data.year,
      area: data.area,
      rooms: data.rooms,
      bathrooms: data.bathrooms,
      amenities: JSON.parse(formData.getAll('amenities').toString()),
      deleteImages: JSON.parse(formData.getAll('deleteImages').toString()),
      images: JSON.parse(formData.getAll('images').toString()),
    };

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
