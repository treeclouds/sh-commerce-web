import React from "react";
import { WrapperButton } from "./element";

const Button = ({
  colorfont = "#fff",
  text = "Button",
  color = "white",
  width = "70%",
  onClick,
}) => {
  return (
    <WrapperButton
      onClick={onClick}
      colorfont={colorfont}
      color={color}
      width={width}
    >
      {text}
    </WrapperButton>
  );
};

export default Button;
