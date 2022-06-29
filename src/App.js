import React from "react";

import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Cart from "./components/Cart/Cart";


const App = () => {
  return (
    <>
      <Cart />
      <Header />
      <Main />
    </>
  );
}

export default App;
