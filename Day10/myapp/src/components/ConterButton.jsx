import React, { useContext } from "react";
import { ConuterContext } from "../context/CounterContext";

const ConterButton = () => {
  const counterContext = useContext(ConuterContext);
  return (
    <>
      <button
        style={{ margin: "10px" }}
        onClick={() => counterContext.setCount(counterContext.count + 1)}
      >
        Add value{" "}
      </button>
      <button onClick={() => counterContext.setCount(counterContext.count - 1)}>
        Remove value
      </button>
    </>
  );
};

export default ConterButton;
