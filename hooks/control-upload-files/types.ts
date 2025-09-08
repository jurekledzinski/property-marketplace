export type PayloadUpload = {
  fileId: string;
  name: string;
  url: string;
  isOriginal?: boolean;
};

export type ResponseApi<T extends object = PayloadUpload> = {
  message?: string;
  payload?: T;
  status?: number;
  success?: boolean;
};

export type useControlUploadFilesProps = {
  limit: number;
  onAddImages: (urls: PayloadUpload[]) => void;
  onDeleteImages: (deletedImage: Omit<PayloadUpload, 'url'>) => void;
  onUpdateLocalFiles: (filteredFiles: File[]) => void;
};

export type RemoveFiles = {
  deletedImagesIds: Omit<PayloadUpload, 'url'>[];
};
