import React from "react";

import styles from './Button.module.css';
import global from './../style/Global.module.css';

const Button = (props) => {
 
  return (
    <button className={`${styles.button} ${global['teko-font']} ${props.classes}`}>
      <span>{props.name}</span>
    </button>
  )
}

export default Button;