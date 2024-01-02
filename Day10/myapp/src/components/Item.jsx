import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Item = ({ name, price }) => {
  const cart = useContext(CartContext);

  return (
    <div
      className="item-card"
      style={{ border: "2px solid black", margin: "20px", width: "200px" }}
    >
      {" "}
      <h4>{name}</h4>
      <p>Price: ${price} </p>
      <button
        onClick={() =>
          cart.setItem([...cart.item, { name: name, price: price }])
        }
        style={{ margin: "10px" }}
      >
        add to cart
      </button>
    </div>
  );
};

export default Item;
