import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from "./Modal.module.css"

const modalRoot = document.querySelector('#modal-root');

  function Modal ({link, modalToggle}) {
  useEffect(() => {
      window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  })

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      modalToggle(null);
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      modalToggle(null);
    }
  };

    return createPortal(
        <div className={css.Overlay} onClick={handleBackdropClick}>
            <div className={css.Modal}>
                <img src={link} alt=""></img>
            </div>
        </div>,
      modalRoot,
    );
  }

export { Modal }