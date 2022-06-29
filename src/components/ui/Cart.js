import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import styles from './Cart.module.css';
import global from './../style/Global.module.css';

const Cart = (props) => {

  const btnRef = useRef();
  useEffect(() => {
    gsap.to(btnRef.current, { x: 0, duration: 1 });
  });
  
  return (
    <button ref={btnRef} className={`${styles.cart} ${global['teko-font']}`}>
      <span>{props.name}</span>
      <span className={styles.badge}>3</span>
    </button>
  )
}

export default Cart;