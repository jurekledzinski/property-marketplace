// wcześniej errorMessageAction

export const errorResponseAction = (message: string) => ({
  message,
  success: false,
});
