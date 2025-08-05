import { InputsAdvertsFilter as InputsTypes } from '@/components';
import { removeNonDigitsObj } from '@/helpers';

export const validate = (value: string, fields: InputsTypes) => {
  const priceOne = removeNonDigitsObj(fields, ['priceFrom']);
  const priceTwo = removeNonDigitsObj(fields, ['priceTo']);
  const priceFrom = parseFloat(priceOne.priceFrom);
  const priceTo = parseFloat(priceTwo.priceTo);

  if (!isNaN(priceFrom) && !isNaN(priceTo) && priceFrom > priceTo) {
    return "Minimum price can't be higher than maximum price.";
  }

  return true;
};
