'server only';

export const serverEndpoints = {
  advert: (domain: string, advertId?: string) =>
    `${domain}/api/v1/advert?id=${advertId}`,

  adverts: (domain: string) => `${domain}/api/v1/adverts`,

  user: (domain: string) => `${domain}/api/v1/user-profile`,

  userAdvert: (domain: string, advertId?: string) =>
    `${domain}/api/v1/user-advert?id=${advertId}`,

  userAdverts: (domain: string) => `${domain}/api/v1/user-adverts`,

  userAnalytics: (domain: string) => `${domain}/api/v1/user-analytics`,

  userMessages: (domain: string) => `${domain}/api/v1/user-messages`,
};
