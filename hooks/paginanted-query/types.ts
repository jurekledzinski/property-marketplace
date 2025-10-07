export type CountryState = {
  code: string;
  div1Code: string;
  div2Code?: string;
  name: string;
  cursor: string;
};

type BuildUrlParams = {
  code: string;
  div1Code?: string;
  afterId?: string;
};

export type UsePaginatedQueryProps = {
  buildUrl: ({ code, afterId, div1Code }: BuildUrlParams) => string;
  queryKey: string[];
};
