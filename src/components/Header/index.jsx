import React from "react";
import { ChevronLeft, SettingIcon } from "../../images";
import { Wrapper } from "./element";
import { useNavigate } from "react-router-dom";

const Header = ({ title = "use Props title", returnIcon = "true" }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div onClick={() => navigate(-1)}>
        {returnIcon === "true" && <img src={ChevronLeft} alt="Back" />}
      </div>
      <div className="h4-bold title">{title}</div>
      <div className="h4-bold title" onClick={() => alert("go to setting")}>
        {returnIcon !== "true" && <img src={SettingIcon} alt="setting" />}
      </div>
    </Wrapper>
  );
};

export default Header;
