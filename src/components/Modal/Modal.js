import React, { useEffect, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import './Modal.css'

const Modal = (props) => {
  const { children, setClosed } = props;
  const modalRef = useRef();

  const closeModal = () => {
    setClosed(true);
  }

  useEffect(() => {
    const handleInnerClick = (evt) => {
      if (modalRef.current !== evt.target.closest("#modal")) {
        setClosed(true);
      }
    };
    document.addEventListener("click", handleInnerClick);

    return () => document.removeEventListener("click", handleInnerClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="modal" className={`flex flex-column modal w-50percent h-80percent`} ref={modalRef}>
      <div className="modal-content">
      <div className="flex space-between align-center relative modal__header">
        <h2>Zoom <FontAwesomeIcon icon={faPaw} /></h2>
        <div>
          <span onClick={closeModal}><FontAwesomeIcon icon={faTimesCircle} color="#f74242"/></span>
        </div>
      </div>
      {children}
      </div>
    </div>
  )
}

export default Modal;