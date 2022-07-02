import React from 'react';

const CartItem = props => {
  return (
    <div>
      <div>
        <h2>{props.name}</h2>
        <div>
          <p>{`€${props.price}`}</p>
          <p>x {props.amount}</p>
        </div>
      </div>
      <div>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </div>

  )
}

export default CartItem;