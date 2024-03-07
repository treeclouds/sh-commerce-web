import React from "react";
import { Button, Gap } from "../../components";
import { Wrapper } from "./element";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
  };
  return (
    <Wrapper>
      <h1>Logo</h1>
      <br />

      <h3>Find Your New Favorite Sports Gear at Our Thrift Shop</h3>

      <Gap height="80px" />

      <Button
        text="Shop now"
        color="#7E49FF"
        width="60%"
        onClick={() => handleClick("/home")}
      />
      <br />
      <Button
        text="Start Selling"
        color="#1F1F1F"
        width="60%"
        onClick={() => handleClick("/sign-up")}
      />

      <Gap height="120px" />
    </Wrapper>
  );
};

export default LandingPage;
