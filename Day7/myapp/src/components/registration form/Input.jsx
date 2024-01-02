import React, { useState } from "react";
import "./input.css";

const Input = ({ labelInput, errorMessage, onChangeHandler, ...otherpros }) => {
  const [focus, setFocus] = useState(false);
  return (
    <>
      <div className="main-input">
        <label>{labelInput}</label>
        <br />
        <input
          {...otherpros}
          onChange={onChangeHandler}
          onBlur={() => setFocus(true)}
          focused={focus.toString()}
        />
        <br />
        <span>{errorMessage}</span>
      </div>
    </>
  );
};

export default Input;
