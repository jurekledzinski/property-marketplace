export const errorResponseAction = (message: string) => ({
  message,
  success: false,
});

export const successResponseAction = <T extends object>(
  message: string,
  payload?: T
) => ({
  message,
  success: true,
  ...(payload !== undefined && { payload }),
});
