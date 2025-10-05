export const formatDataNewMessage = (formData: FormData) => {
  const data = Object.fromEntries(formData);

  const dataForm = { ...data, createdAt: new Date() };

  return dataForm;
};
