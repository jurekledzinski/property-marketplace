import 'server-only';
import { Country } from '../types';

export const formatCountires = (dataCountry: Country[]) => {
  return dataCountry
    .map((country) => ({
      name: country.name,
      code: country.countryCode,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
};
