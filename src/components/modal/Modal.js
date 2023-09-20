import React, { useContext } from "react";
import Win from "./Win";
import Restart from "./Restart";
import { ModalContext } from "../context/ModalContext";

function Modal() {
  const { show, modalMode } = useContext(ModalContext);
  return (
    <>
      {show && (
        <div className="modal">
          <div className="modal__content">
            <div className="container">
              {modalMode === "winner" && <Win />}
              {modalMode === "start" && <Restart />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
