import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [item, setItem] = useState([]);
  return (
    <CartContext.Provider value={{ item, setItem }}>
      {children}
    </CartContext.Provider>
  );
};
