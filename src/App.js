import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  function handleClick(item) {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = item;
    });
    if (isPresent) return;
    setCart([...cart, item]);
  }

  const handleDecrease = (item) => {
    item.quantity = Math.max(item.quantity - 1, 1);
    setCart([...cart]);
  };

  const handleIncrease = (item) => {
    item.quantity += 1;
    setCart([...cart]);
  };

  return (
    <div className="App">
      <Navbar size={cart.length} cart={cart} setCart={setCart} />
      <Body
        handleClick={handleClick}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
      />
    </div>
  );
}

export default App;
