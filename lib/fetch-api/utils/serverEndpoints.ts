'server only';

export const serverEndpoints = {
  advert: (domain: string, advertId?: string) =>
    `${domain}/api/v1/advert?id=${advertId}`,

  adverts: (domain: string) => `${domain}/api/v1/adverts`,

  userMessages: (domain: string) => `${domain}/api/v1/user-messages`,

  userAdverts: (domain: string) => `${domain}/api/v1/user-adverts`,

  userAdvert: (domain: string, advertId?: string) =>
    `${domain}/api/v1/user-advert?id=${advertId}`,

  user: (domain: string) => `${domain}/api/v1/user-profile`,
};
