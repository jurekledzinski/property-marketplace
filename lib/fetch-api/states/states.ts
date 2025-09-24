export type RegionType =
  | 'continent'
  | 'country'
  | 'division1'
  | 'division2'
  | 'division3'
  | 'division4'
  | 'city';

export type ParentRegion = {
  id: string;
  name: string;
};

export type Region = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  type: RegionType;
  continentCode: string;
  countryCode: string;
  division1Code: string;
  division2Code: string;
  division3Code: string;
  division4Code: string;
  population: string;
  timezone: string;
  parentRegions: ParentRegion[];
};

type RegionEdge = {
  node: Region;
  cursor: string;
};

type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
};

export type States = {
  edges: RegionEdge[];
  pageInfo: PageInfo;
};
