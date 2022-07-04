import React, { useRef, useEffect, useContext } from "react";
import { gsap } from "gsap";

import CartContext  from "../../store/cartContext";

import styles from './CartButton.module.css';
import global from './../style/Global.module.css';

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnRef = useRef();
  const spanRef = useRef();

  useEffect(() => {
    gsap.to(btnRef.current, { x: 0, duration: 1 });
  });

  useEffect(() => {
    console.log(spanRef.current)
    gsap.to(spanRef.current, { y: 30, duration: .1 });
    gsap.to(spanRef.current, { y: 30, opacity: 0, duration: .025, delay: .1 });
    gsap.to(spanRef.current, { y: -30, opacity: 0, duration: .025, delay: .15 });
    gsap.to(spanRef.current, {y: 0, opacity: 1, duration: .1, delay: .25 });
    
    // gsap.to(spanRef.current, { y: 0, duration: .2, delay: .2 });
  }, [cartCtx.items])
  
  return (
    <button ref={btnRef} className={`${styles.cart} ${global['teko-font']}`} onClick={props.onClick}>
      <span>{props.name}</span>
      <span className={styles.badge}>
        <span ref={spanRef}>{numberOfCartItems}</span>
      </span>
    </button>
  )
}

export default CartButton;