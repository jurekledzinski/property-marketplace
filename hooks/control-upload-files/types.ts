export type PaylaodUpload = { url: string; fileId: string; name: string };

export type ResponseApi<T extends object = PaylaodUpload> = {
  message?: string;
  status?: number;
  payload?: T;
  success?: boolean;
};

export type useControlUploadFilesProps = {
  limit: number;
  onAddUrl: (urls: PaylaodUpload[]) => void;
  onDeleteUrl: (ids: Omit<PaylaodUpload, 'url'>[]) => void;
  onUpdateLocalFiles: (filteredFiles: File[]) => void;
  onUpdateDeletedIds: (ids: Omit<PaylaodUpload, 'url'>[]) => void;
};

export type RemoveFiles = {
  deletedImagesIds: Omit<PaylaodUpload, 'url'>[];
};
