import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import styles from './Button.module.css';
import global from './../style/Global.module.css';

const Button = () => {

  const btnRef = useRef();
  useEffect(() => {
    gsap.to(btnRef.current, { x: 0, duration: 1 });
  });

  return (
    <button ref={btnRef} className={`${styles.button} ${global['teko-font']}`}>
      <span>Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  )
}

export default Button;