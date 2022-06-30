import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

const Backdrop = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.onClick}></div>
  )
}

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      {props.children}
    </div> 
  )
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal;