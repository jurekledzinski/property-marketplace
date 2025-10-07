export const getIndexes = (limit: number, amountPendingFiles: number) => {
  const maxPendingFiles = limit - amountPendingFiles;
  const startIndex = amountPendingFiles;
  const endIndex = maxPendingFiles + amountPendingFiles;
  return { start: startIndex, end: endIndex };
};
