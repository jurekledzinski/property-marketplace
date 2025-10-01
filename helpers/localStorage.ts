export const getLocalItem = (key: string) => localStorage.getItem(key);

export const setLocalItem = (key: string, value: unknown) =>
  localStorage.setItem(key, JSON.stringify(value));
