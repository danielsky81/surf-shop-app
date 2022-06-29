import React from 'react';

import Modal from '../ui/Modal';
import Button from '../ui/Button';

import styles from './Cart.module.css';

const Cart = () => {

  const cartItems = <ul className={styles.cart}>{[{id: '1', name: 'Surf', price: 60, amount: 2 }].map(item => <li>{item.name}</li>)}</ul>

  return (
    <Modal>
      {cartItems}
      <div className={styles['cart-total']}>
        <span>Total</span>
        <span>666</span>
      </div>
      <Button name='Close' classes={styles['cart-close']}/>
      <Button name='Checkout' classes={styles['cart-checkout']}/>
    </Modal>
  )
}

export default Cart;