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
  useEffect(() => {
    gsap.to(btnRef.current, { x: 0, duration: 1 });
  });
  
  return (
    <button ref={btnRef} className={`${styles.cart} ${global['teko-font']}`} onClick={props.onClick}>
      <span>{props.name}</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default CartButton;