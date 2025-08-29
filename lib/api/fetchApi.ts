import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';

function formatHeaders(headers?: ReadonlyHeaders) {
  const formattedHeader =
    process.env.NODE_ENV === 'development'
      ? headers
      : headers
      ? Object.fromEntries(Array.from(headers.entries()))
      : {};

  return formattedHeader;
}

export async function fetchResponse(response: Response) {
  // Now should be error from body instead statusText
  if (!response.ok) throw new Error(response.statusText);
  return await response.json();
}

export function getOptions(tags?: string[], headers?: ReadonlyHeaders) {
  const formattedHeaders = formatHeaders(headers);

  const options = {
    ...(tags && { next: { tags } }),
    ...(formattedHeaders && { headers: formattedHeaders }),
    ...(!formattedHeaders && {
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  };

  return options;
}
