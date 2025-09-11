import 'server-only';
import ImageKit from 'imagekit';
import { DraftFile } from '@/models';
import { getCollectionDb } from '../../database';
import {
  DataEditAdvert,
  DataNewAdvert,
  DeleteImagesImagekitParams,
} from './types';

export const deleteImagesImagekit = async ({
  advertId,
  checkIsOriginal = false,
  images = [],
  userId,
}: DeleteImagesImagekitParams) => {
  const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    urlEndpoint: process.env.IMAGEKIT_URL!,
  });

  const imagesPromises = images.map(async (image) => {
    const shouldDelete = checkIsOriginal
      ? image.isOriginal !== undefined && !image.isOriginal
      : true;

    if (!shouldDelete) {
      return { ...image, success: true };
    }

    try {
      await imagekit.deleteFile(image.fileId);
      return { ...image, success: true };
    } catch {
      return { ...image, success: false };
    }
  });

  const results = await Promise.all(imagesPromises);
  const allSuccess = results.every((result) => result.success);

  const deleteQuery: { advertId?: string; userId: string } = {
    userId,
  };

  if (advertId) deleteQuery.advertId = advertId;

  const draftCollection = getCollectionDb<DraftFile>('draftImages');

  if (!draftCollection) return false;

  if (allSuccess) {
    draftCollection.deleteOne(deleteQuery);
  } else {
    const allFailed = results.filter((result) => !result.success);
    const failed = allFailed.map((img) => ({
      isOriginal: img.isOriginal,
      fileId: img.fileId,
      name: img.name,
      url: img.url,
    }));

    draftCollection.updateOne(deleteQuery, {
      $set: { images: failed, status: 'failed' },
    });
  }
};

export const formatDataNewAdvert = (
  data: DataNewAdvert,
  formData: FormData
) => {
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

  return dataForm;
};

export const formatDataEditAdvert = (
  data: DataEditAdvert,
  formData: FormData
) => {
  const formatted = formatDataNewAdvert(data, formData);

  const dataForm = {
    ...formatted,
    createdAt: new Date(data.createdAt.toString()),
  };

  return dataForm;
};
