'server only';

export const serverEndpoints = {
  userAdverts: (domain: string) => `${domain}/api/v1/user-adverts`,
  userAdvert: (domain: string, advertId?: string) =>
    `${domain}/api/v1/user-advert?id=${advertId}`,
  user: (domain: string) => `${domain}/api/v1/user-profile`,
};
