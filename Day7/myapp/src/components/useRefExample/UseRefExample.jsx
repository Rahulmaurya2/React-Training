import React, { useRef, useState } from "react";

import "./useRefExample.css";

const UseRefExample = () => {
  const [input, setInput] = useState("enter the name ");
  const inputElement = useRef("");

  const changeStyle = () => {
    console.log(inputElement.current);
    inputElement.current.style.backgroundColor = "rgb(2, 190, 253)";
    inputElement.current.focus();
  };

  return (
    <>
      <div>
        <div className="inpt">
          <label htmlFor="text">Name </label>
          <input type="text" name="text" value={input} ref={inputElement} />
        </div>
        <button className="btn" onClick={changeStyle}>
          Enter
        </button>
      </div>
    </>
  );
};

export default UseRefExample;
