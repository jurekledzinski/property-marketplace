export const decodeQueryUrl = <T extends object>(
  query: T,
  nameKeysArray?: string[]
) => {
  const decodedQueries = Object.fromEntries(
    Object.entries(query).map((item) =>
      (nameKeysArray || []).includes(item[0])
        ? [item[0], decodeURIComponent(item[1]).split(',')]
        : [item[0], decodeURIComponent(item[1])]
    )
  ) as T;

  return decodedQueries;
};
