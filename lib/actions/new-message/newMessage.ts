export const formatDataNewMessage = (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const sender = formData.get('sender')
    ? JSON.parse(formData.get('sender') as string)
    : {};

  const dataForm = {
    ...data,
    sender,
    createdAt: new Date(),
  };

  return dataForm;
};
