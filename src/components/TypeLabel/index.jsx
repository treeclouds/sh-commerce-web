import React from "react";
import { LabelTypeWrapper } from "./element";

const TypeLabel = ({ type = "mint" }) => {
  function getConditionText(type) {
    if (type === "mint") {
      return "Mint Condition";
    } else if (type === "like") {
      return "Like-new";
    } else if (type === "new") {
      return "Brand New";
    } else {
      return ""; // Default case if type doesn't match any condition
    }
  }
  return (
    <LabelTypeWrapper type={type}>{getConditionText(type)}</LabelTypeWrapper>
  );
};

export default TypeLabel;
