'use server';
import { Advert, AdvertSchema } from '@/models';

import {
  connectDBAction,
  errorResponseAction,
  getCollectionDb,
  successResponseAction,
} from '@/lib';

import { auth } from '@/auth';

export const newAdvert = connectDBAction(
  async (prevState: unknown, formData: FormData) => {
    const session = await auth();
    const data = Object.fromEntries(formData);
    // const cookies = await formatCookiesString();

    if (!session) return errorResponseAction('Unauthorized');

    const dataForm = {
      ...data,
      price: data.price,
      year: data.year,
      area: data.area,
      rooms: data.rooms,
      bathrooms: data.bathrooms,
      amenities: JSON.parse(formData.getAll('amenities').toString()),
      files: formData.getAll('files'),
      images: JSON.parse(formData.getAll('images').toString()),
      deleteImagesIds: JSON.parse(
        formData.getAll('deleteImagesIds').toString()
      ),
    };

    const parsedData = AdvertSchema.parse(dataForm);

    // const files = formData.getAll('files');
    // const filesData = new FormData();
    // files.forEach((file) => filesData.append('files', file));

    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/v1/upload`,
    //   {
    //     body: filesData,
    //     method: 'POST',
    //     cache: 'no-store',
    //     headers: {
    //       Cookie: cookies,
    //     },
    //     credentials: 'include',
    //   }
    // );


    // if (!response.ok) return errorResponseAction('Upload failed');

    // const storedUrls = (await response.json()) as {
    //   payload: { url: string; fileId: string }[];
    // };

    const collection = getCollectionDb<Advert>('adverts');

    if (!collection) return errorResponseAction('Internal server error');

    delete parsedData.deleteImagesIds;
    delete parsedData.state;
    delete parsedData.files;

    collection.insertOne({
      ...parsedData,
      createdAt: new Date().toISOString(),
    });

    return successResponseAction('Create advert successful');
  }
);
