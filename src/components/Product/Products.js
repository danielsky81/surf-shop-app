import React from "react";
import Product from "./Product";

import styles from './Product.module.css';

const DUMMY_BOARDS = [
  {
    id: 1,
    name: 'Channel Islands',
    description: 'Channel Islands Bobby Quad Surfboard',
    price: 750
  },
  {
    id: 2,
    name: 'NSP',
    description: 'NSP Elements Hdt Fun Surfboard',
    price: 599
  },
  {
    id: 3,
    name: 'Torq',
    description: 'Torq Mod Fish Surfboard',
    price: 500
  },
  {
    id: 4,
    name: 'Indio',
    description: 'Indio Racer Hybrid Surfboard',
    price: 415
  },
  {
    id: 5,
    name: 'Fourth',
    description: 'Fourth Surfboards Twin Base Construction 2 Fin Surfboard',
    price: 800
  },
  {
    id: 6,
    name: 'Pyzel',
    description: 'Pyzel Pyzalien 2 Futures 5 Fin Surfboard',
    price: 815
  },
]

const Products = () => {
  
  const boardList = DUMMY_BOARDS.map(board => <Product key={board.id} {...board} />);

  return (
    <section className={styles.products}>
      {boardList}
    </section>
  )
}

export default Products;