import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const cart = useContext(CartContext);
  const total = cart.item.reduce((a, b) => a + b.price, 0);
  return (
    <div
      className="cart"
      style={{
        textAlign: "left",
        marginLeft: "20px",
        border: "2px solid black",
        width: "400px",
        padding: "20px",
      }}
    >
      <h2>Cart item </h2>
      {cart &&
        cart.item.map((item) => (
          <li>
            {item.name}-- {item.price}
          </li>
        ))}
      <h3>{total}</h3>
    </div>
  );
};

export default Cart;
