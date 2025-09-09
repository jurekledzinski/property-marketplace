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
  getCollectionDb,
  successResponseAction,
} from '@/lib';

export const editAdvert = connectDBAction(
  async (prevState: unknown, formData: FormData) => {
    const session = await auth();
    const data = Object.fromEntries(formData);

    if (!session) return errorResponseAction('Unauthorized');

    const dataForm = {
      ...data,
      createdAt: new Date(data.createdAt.toString()),
      price: data.price,
      year: data.year,
      area: data.area,
      rooms: data.rooms,
      bathrooms: data.bathrooms,
      amenities: JSON.parse(formData.getAll('amenities').toString()),
      deleteImages: JSON.parse(formData.getAll('deleteImages').toString()),
      images: JSON.parse(formData.getAll('images').toString()),
    };

    console.log('dataForm edit action', dataForm);

    const parsedData = AdvertSchema.extend({ id: z.string() }).parse(dataForm);

    const advertCollection = getCollectionDb<DataDB<Advert>>('adverts');

    if (!advertCollection) {
      return errorResponseAction('Internal server error');
    }

    const result = await deleteImagesImagekit({
      checkIsOriginal: false,
      images: parsedData.deleteImages,
      userId: session.user.id,
      advertId: parsedData.id,
    });

    if (result !== undefined && !result) {
      return errorResponseAction('Internal server error');
    }

    delete parsedData.deleteImages;
    delete parsedData.state;
    delete parsedData.files;

    await advertCollection.updateOne(
      { _id: new ObjectId(parsedData.id) },
      { $set: { ...parsedData } }
    );

    return successResponseAction('Edit advert successful');
  }
);
