export const getColorLegend = (text: string) => {
  if (text === 'Active') return 'success';
  if (text === 'Inactive') return 'negative';
  return 'warning';
};
