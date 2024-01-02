import { createContext, useState } from "react";

export const ConuterContext = createContext(null);

export const CounterProvider = (props) => {
  const [count, setCount] = useState(0);
  return (
    <ConuterContext.Provider value={{ count, setCount }}>
      {props.children}
    </ConuterContext.Provider>
  );
};
