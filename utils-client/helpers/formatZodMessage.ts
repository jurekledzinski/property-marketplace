export const formatZodMessage = (message: string) => {
  const formatted = message.replace(/✖/g, '').trim();

  const matches = [...formatted.matchAll(/([^\n]+)\s*\n\s*→ at (\w+)/g)];
  const result = matches.map(([, message]) => message.trim());
  const formatResult = result.join('\n');

  if (formatResult.length) return formatResult;
  return message;
};
