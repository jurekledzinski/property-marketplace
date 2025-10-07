export const selectAccordion = (prev: string[], id: string) => {
  if (prev.includes(id)) return [...prev].filter((i) => i !== id);
  return [...prev, id];
};
