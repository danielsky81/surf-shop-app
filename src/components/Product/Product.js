import React from 'react';
import ProductForm from './ProductForm';

import styles from './Product.module.css';

const Product = (props) => {
  return (
    <div className={styles.product}>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>€{props.price}</p>
      <ProductForm id={props.id}/>
    </div>
  )
}

export default Product;