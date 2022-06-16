import React from "react";
import styles from './Button.module.css';
import grain from '../style/Grain.module.css';

const Button = () => {
  return (
    <button className={`${styles.button} ${grain.grain}`}>Cart</button>
  )
}

export default Button;