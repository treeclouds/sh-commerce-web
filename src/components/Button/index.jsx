import React from "react";
import { WrapperButton } from "./element";

const Button = ({ text = "Button", color = "white", width="70%", onClick }) => {
  return <WrapperButton onClick={onClick} color={color} width={width}>{text}</WrapperButton>;
};

export default Button;
