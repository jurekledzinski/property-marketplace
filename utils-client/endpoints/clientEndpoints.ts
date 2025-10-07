export const clientEndpoints = {
  cities: (code: string, division1Code?: string, after?: string) => {
    return after
      ? `/api/v1/cities/?code=${code}&division1Code=${division1Code}&after=${after}`
      : `/api/v1/cities/?code=${code}&division1Code=${division1Code}`;
  },
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
  states: (code: string, after?: string) => {
    return after
      ? `/api/v1/states/?code=${code}&after=${after}`
      : `/api/v1/states/?code=${code}`;
  },
  updateDraftImages: (advertId?: string) => {
    return advertId
      ? `/api/v1/user-advert/draft?id=${advertId}`
      : '/api/v1/user-advert/draft';
  },
};
