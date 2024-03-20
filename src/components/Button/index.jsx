import React from "react";
import { WrapperButton } from "./element";

const Button = ({
  colorFont = "#fff",
  text = "Button",
  color = "white",
  width = "70%",
  onClick,
}) => {
  return (
    <WrapperButton
      onClick={onClick}
      colorFont={colorFont}
      color={color}
      width={width}
    >
      {text}
    </WrapperButton>
  );
};

export default Button;
