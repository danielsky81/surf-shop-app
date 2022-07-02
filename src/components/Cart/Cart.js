import React, { useContext } from 'react';

import Modal from '../ui/Modal';
import Button from '../ui/Button';
import CartContext from '../../store/cartContext';
import CartItem from './CartItem';

import styles from './Cart.module.css';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `€${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemovehandler = id => {

  }
  const cartItemAddhandler = item => {
    
  }

  const cartItems = <div className={styles.cart}>{cartCtx.items.map(item => <CartItem 
    key={item.id} 
    name={item.name} 
    price={item.price} 
    amount={item.amount} 
    onRemove={cartItemRemovehandler.bind(null, item.id)} 
    onAdd={cartItemAddhandler.bind(null, item)} 
  />)}</div>

  return (
    <Modal onClick={props.onCloseCart}>
      {cartItems}
      <div className={styles['cart-total']}>
        <span>Total</span>
        <span>{totalAmount}</span>
      </div>
      <Button name='Close' classes={styles['cart-close']} onClick={props.onCloseCart}/>
      {hasItems && <Button name='Checkout' classes={styles['cart-checkout']}/>}
    </Modal>
  )
}

export default Cart;