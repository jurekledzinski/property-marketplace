import { OnError } from '@/components';
import { showErrorToast } from '@/utils-client';

export const validationFilesInfo: OnError = ({ name, type }) => {
  if (type === 'amount') {
    showErrorToast(`Maximum 10 images allowed`);
  }
  if (type === 'size') {
    showErrorToast(`${name} exceeds the 500KB size limit`);
  }
  if (type === 'type') {
    showErrorToast(`${name} is not allowed. Use JPG or PNG`);
  }
};
