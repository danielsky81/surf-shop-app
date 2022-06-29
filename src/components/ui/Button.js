import React from "react";

import styles from './Button.module.css';
import global from './../style/Global.module.css';

const Button = (props) => {
 
  return (
    <button className={`${styles.button} ${global['teko-font']}`}>
      <span>{props.name}</span>
    </button>
  )
}

export default Button;