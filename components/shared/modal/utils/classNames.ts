import stylesBody from '../components/modal-body/ModalBody.module.css';
import stylesFooter from '../components/modal-footer/ModalFooter.module.css';
import stylesHeader from '../components/modal-header/ModalHeader.module.css';
import stylesModal from '../Modal.module.css';
import { classNames } from '@/helpers';
import { Color } from '@/types';

export const modalClassNames = () => ({
  modal: stylesModal,
  modalElement: stylesModal.modalElement,
});

export const modalHeaderClassNames = (variant: Color) => ({
  header: classNames(stylesHeader.header, stylesHeader[variant!]),
  title: classNames(stylesHeader.title, stylesHeader[variant!]),
});

export const modalBodyClassNames = () => ({
  body: stylesBody.body,
});

export const modalFooterClassNames = () => ({
  footer: stylesFooter.footer,
});
