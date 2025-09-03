export type PayloadUpload = { url: string; fileId: string; name: string };

export type ResponseApi<T extends object = PayloadUpload> = {
  message?: string;
  status?: number;
  payload?: T;
  success?: boolean;
};

export type useControlUploadFilesProps = {
  limit: number;
  onAddImages: (urls: PayloadUpload[]) => void;
  onDeleteImages: (ids: string[]) => void;
  onUpdateLocalFiles: (filteredFiles: File[]) => void;
  onUpdateDeletedIds: (ids: Omit<PayloadUpload, 'url'>[]) => void;
};

export type RemoveFiles = {
  deletedImagesIds: Omit<PayloadUpload, 'url'>[];
};
