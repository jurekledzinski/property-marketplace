export const formatDateLocalString = ({
  date,
  locales = 'en-GB',
  options = { timeZone: 'UTC' },
}: {
  date?: string | Date;
  locales?: Intl.LocalesArgument;
  options?: Intl.DateTimeFormatOptions;
}) => {
  if (!date) return 'Invalid date';

  const parsedDate = typeof date === 'string' ? new Date(date) : date;

  if (isNaN(parsedDate.getTime())) return 'Invalid date';

  return new Intl.DateTimeFormat(locales, options).format(parsedDate);
};
