export const formatNumber = (
  value: string,
  local: Intl.LocalesArgument,
  options: Intl.NumberFormatOptions
) => {
  const num = parseFloat(value);

  const format = new Intl.NumberFormat(local, options).format(num);

  return { format: value === '' ? '' : format, value };
};

export const removeNonDigitsObj = <
  T extends Record<string, unknown>,
  K extends keyof T
>(
  obj: T,
  keys: K[]
) => {
  const newObj = { ...obj };

  for (const key of keys) {
    const value = obj[key];
    if (typeof value === 'string') {
      newObj[key] = value.replace(/[^\d]/g, '') as T[K];
    }
  }

  return newObj;
};

export const removeNonDigits = (str: string) => str.replace(/[^\d]/g, '');

export const formatNumberToStringObject = <
  K extends keyof T,
  T extends { [K: string]: T[K] } | null
>(
  data: T
): { [K in keyof T]: T[K] extends number ? string : T[K] } | null => {
  if (data === null) return null;

  return Object.fromEntries(
    Object.entries(data).map((item) => {
      if (typeof item[1] === 'number') {
        return [item[0], item[1].toString()];
      }
      return item;
    })
  );
};
