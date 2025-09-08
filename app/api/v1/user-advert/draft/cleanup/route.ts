import 'server-only';
import ImageKit from 'imagekit';
import { DraftFile } from '@/models';

import {
  getCollectionDb,
  connectDB,
  errorResponseApi,
  successResponseApi,
} from '@/lib';

export const GET = connectDB(async () => {
  const MS = 2 * 60 * 60 * 1000;
  const cutoff = new Date(Date.now() - MS);

  const draftCollection = getCollectionDb<DraftFile>('draftImages');

  if (!draftCollection) return errorResponseApi({ status: 500 });

  const staleDrafts = await draftCollection
    .find({ updatedAt: { $lt: cutoff } })
    .toArray();

  const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    urlEndpoint: process.env.IMAGEKIT_URL!,
  });

  for (const draft of staleDrafts) {
    const images = [...draft.images!, ...draft.deleteImages!].filter(
      (image) => !image.isOriginal
    );
    for (const img of images) {
      try {
        await imagekit.deleteFile(img.fileId);
      } catch {}
    }

    await draftCollection.deleteOne({ _id: draft._id });
  }

  return successResponseApi({
    message: 'Stale drafts deleted successfull',
  });
});
