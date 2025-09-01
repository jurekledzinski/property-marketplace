export type PaylaodUpload = { url: string; fileId: string; name: string };

export type ResponseApi<T extends object = PaylaodUpload> = {
  message?: string;
  status?: number;
  payload?: T;
  success?: boolean;
};

export type useControlUploadFilesProps = {
  limit: number;
  onAddUrl: (urls: Omit<PaylaodUpload, 'name'>[]) => void;
  onUpdateLocalFiles: (filteredFiles: File[]) => void;
};
