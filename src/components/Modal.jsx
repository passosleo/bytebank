import React, { forwardRef, useImperativeHandle, useState, useEffect, useRef } from "react";
import "./Modal.css";

const Modal = forwardRef(({ title, children }, ref) => {
  const [showModal, setShowModal] = useState(false);

  const maskModalRef = useRef(null);

  useEffect(() => {
    function handler(event) {
      if (maskModalRef.current.contains(event.target)) {
        setShowModal(false);
      };
    };
    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  }, [])

  useImperativeHandle(ref, () => ({
    handleModal() {
      setShowModal(!showModal);
    },
  }));

  return (
    showModal && (
      <>
        <div ref={maskModalRef} className="modal-mask" />
        <div className="modal">
          <div>
            <h2>{title}</h2>
            <span className="close" onClick={() => setShowModal(!showModal)}>&times;</span>
          </div>
          {children}
        </div>
      </>
    )
  );
});

export default Modal;