import React, { useReducer } from 'react';
import CartContext from './cartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {

  let updatedItems;

  const addition = () => {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  const subtraction = () => {
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1}
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  
  switch (action.type) {
    case 'ADD':
      return addition();
    case 'REMOVE':
      return subtraction();
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