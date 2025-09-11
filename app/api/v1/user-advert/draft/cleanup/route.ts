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
  const maxTime = 2 * 60 * 60 * 1000;
  const cutoff = new Date(Date.now() - maxTime);

  const draftCol = getCollectionDb<DraftFile>('draftImages');

  if (!draftCol) return errorResponseApi({ status: 500 });

  const staleDrafts = await draftCol
    .find({ updatedAt: { $lt: cutoff } })
    .toArray();

  const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    urlEndpoint: process.env.IMAGEKIT_URL!,
  });

  for (const draft of staleDrafts) {
    const images = [...(draft.images || []), ...(draft.deleteImages || [])];
    const newImages = images.filter((image) => !image.isOriginal);

    for (const image of newImages) {
      try {
        await imagekit.deleteFile(image.fileId);
      } catch {}
    }

    await draftCol.deleteOne({ _id: draft._id });
  }

  return successResponseApi({ success: true });
});
