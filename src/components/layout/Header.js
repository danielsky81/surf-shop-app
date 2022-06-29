import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import styles from './Header.module.css';

import CartButton from '../ui/CartButton';

const Header = () => {

  const logoRef = useRef();
  useEffect(() => {
    gsap.to(logoRef.current, { x: 0, duration: 1 });
  });

  return (
    <>
      <header className={styles.header}>
        <h1 ref={logoRef}>Surf Shop</h1>
        <CartButton name='Cart' />
      </header>
    </>
  )
}

export default Header;