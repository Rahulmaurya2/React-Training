import React from "react";
import { useSelector } from "react-redux";
const Count = () => {
  const count = useSelector();
  return <div>0</div>;
};

export default Count;
