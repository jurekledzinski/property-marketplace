export const formatFormData = <T extends object>(data: T) => {
  const formData = new FormData();

  for (const key in data) {
    const value = data[key as keyof T];

    if (value === null || value === undefined) continue;

    switch (typeof value) {
      case 'string':
      case 'number':
      case 'boolean':
        {
          formData.append(key, value.toString());
        }
        break;
      case 'object':
        if (value instanceof File) {
          formData.append(key, value);
        } else if (Array.isArray(value)) {
          if (value[0] instanceof File) {
            value.forEach((file) => {
              if (file instanceof File) formData.append(key, file);
            });
          } else {
            formData.append(key, JSON.stringify(value));
          }
        } else {
          formData.append(key, JSON.stringify(value));
        }
        break;
    }
  }

  return formData;
};
