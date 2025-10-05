type ParentRegion = {
  id: string;
  name: string;
};

export type Country = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  type: 'country';
  continentCode: string;
  countryCode: string;
  division1Code: string;
  division2Code: string | null;
  division3Code: string | null;
  division4Code: string | null;
  population: string;
  timezone: string;
  parentRegions: ParentRegion[];
};

export type Countries = { name: string; code: string }[];
