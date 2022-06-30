import React, { useContext } from 'react';
import ProductForm from './ProductForm';
import CartContext from '../../store/cartContext';

import styles from './Product.module.css';

const Product = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  return (
    <div className={styles.product}>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>€{props.price}</p>
      <ProductForm id={props.id} onAddToCart={addToCartHandler}/>
    </div>
  )
}

export default Product;