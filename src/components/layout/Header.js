import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import styles from './Header.module.css';

import Button from '../ui/Button';

const Header = () => {

  const logoRef = useRef();
  useEffect(() => {
    gsap.to(logoRef.current, { x: 0, duration: 1 });
  });

  return (
    <>
      <header className={styles.header}>
        <h1 ref={logoRef}>Surf Shop</h1>
        <Button />
      </header>
    </>
  )
}

export default Header;