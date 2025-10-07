import stylesBody from '../components/modal-body/ModalBody.module.css';
import stylesFooter from '../components/modal-footer/ModalFooter.module.css';
import stylesHeader from '../components/modal-header/ModalHeader.module.css';
import stylesModal from '../Modal.module.css';
import { ClassNamesModalHeader } from './types';
import { generateClassNames } from '@/utils-client';

export const modalClassNames = () => ({
  modal: stylesModal,
  modalElement: stylesModal.modalElement,
});

export const modalHeaderClassNames: ClassNamesModalHeader = ({
  color,
  variant,
}) => ({
  header: generateClassNames(stylesHeader, {
    header: true,
    [`${color}`]: Boolean(color),
    [`${variant}`]: Boolean(variant),
  }),
  title: stylesHeader.title,
});

export const modalBodyClassNames = () => ({
  body: stylesBody.body,
});

export const modalFooterClassNames = () => ({
  footer: stylesFooter.footer,
});
