export const filterProps = <T extends object, K extends keyof T>(
  props: T,
  keys: K[]
) => {
  return Object.fromEntries(
    Object.entries(props).filter(([key]) => !keys.includes(key as K))
  ) as Omit<T, K>;
};
