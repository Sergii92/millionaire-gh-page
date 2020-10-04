import React from "react";

const Button = ({ title, onClickNewGame }) => {
  return <button onClick={onClickNewGame}>{title}</button>;
};
export default Button;
