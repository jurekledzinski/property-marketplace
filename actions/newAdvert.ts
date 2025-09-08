'use server';
import { Advert, AdvertSchema, DraftFile } from '@/models';

import {
  connectDBAction,
  errorResponseAction,
  getCollectionDb,
  successResponseAction,
} from '@/lib';

import { auth } from '@/auth';
import ImageKit from 'imagekit';

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
    const draftCollection = getCollectionDb<DraftFile>('draftImages');

    if (!advertCollection || !draftCollection) {
      return errorResponseAction('Internal server error');
    }

    const imagekit = new ImageKit({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
      urlEndpoint: process.env.IMAGEKIT_URL!,
    });

    (parsedData.deleteImages || []).forEach(async (image) => {
      await imagekit.deleteFile(image.fileId);
    });

    draftCollection.deleteOne({ userId: session.user.id });

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
