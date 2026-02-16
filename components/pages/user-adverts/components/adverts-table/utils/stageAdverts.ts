import { UserAdvertsTable } from '@/services';

const maxDays = 2 * 24 * 60 * 60 * 1000;
const minDays = 1 * 24 * 60 * 60 * 1000;

export const getStage = (updatedAt: UserAdvertsTable['updatedAt']) => {
  if (!updatedAt) return;
  const updateDate = new Date(updatedAt);
  const age = Date.now() - updateDate.getTime();

  if (age >= minDays && age <= maxDays) {
    return 'soon expire';
  } else if (age < minDays) {
    return 'active';
  } else if (age > maxDays) {
    return 'inActive';
  }
};
