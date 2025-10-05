export const classNames = (
  ...classes: (string | false | null | undefined)[]
) => {
  return classes.filter(Boolean).join(' ');
};

export const generateClassNames = (
  styles: Record<string, string>,
  modifiers: Record<string, boolean>
) => {
  return Object.entries(modifiers)
    .filter((item) => item[1])
    .map(([key]) => styles[key])
    .filter(Boolean)
    .join(' ');
};
