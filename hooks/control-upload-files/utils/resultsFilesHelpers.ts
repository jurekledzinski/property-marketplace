import { PayloadUpload, ResponseApi } from '../types';

export const getResultByStatus = (
  result: PromiseSettledResult<ResponseApi<PayloadUpload>>[]
) => {
  const successFiles = result.filter((info) => info.status === 'fulfilled');
  const rejectedFiles = result.filter((info) => info.status === 'rejected');

  return { rejectedFiles, successFiles };
};

export const getFilesSuccessNames = (
  successFiles: PromiseFulfilledResult<ResponseApi<PayloadUpload>>[],
  rejectedFiles: PromiseRejectedResult[]
) => {
  const successNames = successFiles.map((info) => {
    const { name } = info.value.payload!;
    return name;
  });

  const rejectedNames = rejectedFiles.map((info) => info.reason?.payload?.name);

  return { rejectedNames, successNames };
};
