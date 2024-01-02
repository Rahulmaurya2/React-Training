import React, { useState } from "react";
import "./InputField.css";

const Input = ({ labelName, errorMessage, onChange, ...otherprops }) => {
  const [focus, setFocus] = useState(false);

  return (
    <>
      <div className="inputField">
        <label>{labelName}</label>
        <input
          {...otherprops}
          onChange={onChange}
          onBlur={() => setFocus(true)}
          focused={focus.toString()}
        />
        <span>{errorMessage}</span>
      </div>
    </>
  );
};

export default Input;
