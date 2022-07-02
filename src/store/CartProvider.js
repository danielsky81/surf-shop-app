import React, { useReducer } from 'react';
import CartContext from './cartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

  const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
  const existingCartItem = state.items[existingCartItemIndex];
  let updatedItems;

  if (existingCartItem) {
    console.log(existingCartItem.amount)
    console.log(action.item.amount)
    const updatedItem = {
      ...existingCartItem,
      amount: existingCartItem.amount + action.item.amount
    };
    updatedItems = [...state.items];
    updatedItems[existingCartItemIndex] = updatedItem;
  } else {
    updatedItems = state.items.concat(action.item);
  }

  switch (action.type) {
    case 'ADD':
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      }
    case 'REMOVE':
      return {}
    default:
      return defaultCartState;
  }
}

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = item => {
    dispatch({type: 'ADD', item: item})
  }

  const removeItemFromCartHandler = id => {
    dispatch({type: 'REMOVE', id: id})
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;