export const toastDeleteOptions = (
  response: Promise<Response>,
  name: string
) => ({
  promise: response.then((res) => {
    if (!res.ok) throw new Error();
    return res;
  }),
  name,
  task: 'deleting' as const,
  messageError: 'Could not delete',
  messageSuccess: 'Image deleted',
});

export const toastUploadOptions = (
  response: Promise<Response>,
  name: string
) => ({
  promise: response.then((res) => {
    if (!res.ok) throw new Error();
    return res;
  }),
  name,
});
