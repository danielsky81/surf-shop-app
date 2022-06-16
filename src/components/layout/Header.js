import React, { Fragment } from 'react';
import styles from './Header.module.css';
import grain from '../style/Grain.module.css';

import Button from '../ui/Button';

const Header = () => {
  return (
    <Fragment>
      <header className={`${styles.header} ${grain.grain}`}>
        <h1>Surf Shop</h1>
        <Button />
      </header>
    </Fragment>
  )
}

export default Header;