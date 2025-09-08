export const clientEndpoint = {
  deleteDraftImages: (advertId?: string) => {
    return advertId
      ? `/api/v1/user-advert/draft?id=${advertId}`
      : '/api/v1/user-advert/draft';
  },
  getDraftImages: (mode: 'edit' | 'new', advertId?: string) => {
    return advertId
      ? `/api/v1/user-advert/draft?id=${advertId}&mode=${mode}`
      : `/api/v1/user-advert/draft?mode=${mode}`;
  },
  updateDraftImages: (advertId?: string) => {
    return advertId
      ? `/api/v1/user-advert/draft?id=${advertId}`
      : '/api/v1/user-advert/draft';
  },
};
