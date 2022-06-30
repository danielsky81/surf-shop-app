import React, { useState } from "react";

import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";


const App = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const openCartHandler = () => {
    setCartOpen(true)
  }

  const closeCartHandler = () => {
    setCartOpen(false)
  }

  return (
    <CartProvider>
      {cartOpen && <Cart onCloseCart={closeCartHandler}/>}
      <Header onOpenCart={openCartHandler}/>
      <Main />
    </CartProvider>
  );
}

export default App;
