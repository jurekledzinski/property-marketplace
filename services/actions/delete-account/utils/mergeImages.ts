export const mergeImages = <
  T extends { deleteImages?: U[]; images?: U[] },
  U = NonNullable<T['images']>[number]
>(
  allDocuments: T[]
): { images: U[] } => {
  const mergedImages = allDocuments.reduce<{ images: U[] }>(
    (acc, curr) => {
      acc.images = [
        ...acc.images,
        ...(curr.deleteImages || []),
        ...(curr.images || []),
      ];

      return acc;
    },
    { images: [] }
  );

  return mergedImages;
};
