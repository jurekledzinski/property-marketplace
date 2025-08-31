import 'server-only';

export const endpoints = {
  userAdverts: (domain: string) => `${domain}/api/v1/user-adverts`,
  userAdvert: (domain: string, advertId?: string) =>
    `${domain}/api/v1/user-advert?id=${advertId}`,
  user: (domain: string, userId: string) =>
    `${domain}/api/v1/user?id=${userId}`,
};
