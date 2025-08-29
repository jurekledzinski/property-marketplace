import 'server-only';

export const endpoints = {
  adverts: (domain: string) => `${domain}/api/v1/adverts`,
  user: (domain: string, userId: string) =>
    `${domain}/api/v1/user?id=${userId}`,
};
