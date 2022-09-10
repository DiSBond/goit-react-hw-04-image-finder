import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, ModalContainer } from './modalSt';

import propTypes from 'prop-types';

const modalRoot = document.querySelector(`#modalRoot`);

const Modal = ({ closeModal, children }) => {
  const hadleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const backDropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', hadleKeyDown);
    return () => {
      window.removeEventListener('keydown', hadleKeyDown);
    };
  });

  return createPortal(
    <Backdrop onClick={backDropClick}>
      <ModalContainer>{children}</ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = { closeModal: propTypes.func.isRequired };
