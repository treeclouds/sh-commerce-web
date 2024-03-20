import React, { useState } from "react";
import { Header, Button, Gap, Card as CardProduct } from "../../components";
import { Wrapper } from "./element";
import { useNavigate } from "react-router-dom";
import { WishlistBanner } from "../../images";
const Wishlist = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [isLogin, setLogin] = useState(false);
  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <Wrapper>
      <Header title="Wishlist" />
      <Gap height="50px" />

      {isLogin ? (
        <>
          <Gap height="10px" />
          <div className="card-container ">
            <CardProduct type="new"/>
            <CardProduct type="like"/>
            <CardProduct />
          </div>
          <Gap height="100px" />
        </>
      ) : (
        <>
          <Gap height="150px" />
          <div className="content-empty">
            <img src={WishlistBanner} alt="WishlistBanner" />
            <Gap height="50px" />
            <p className="p-bold">
              You need an account to add item into wishlist.
            </p>
          </div>
          <Gap height="100px" />
        </>
      )}

      {isLogin ? (
        <div>
          <Button
            text="Explore Products"
            color="#7E49FF"
            width="85%"
            onClick={() => handleClick("/home")}
          />
        </div>
      ) : (
        <div>
          <Button
            text="Login"
            color="#7E49FF"
            width="85%"
            onClick={() =>setLogin(true)}
          />
          <Gap height="10px" />
          <Button
            text="I don't have an account"
            color="#FFFFFF"
            colorFont="black"
            width="85%"
            onClick={() => handleClick("/signup")}
          />
        </div>
      )}
    </Wrapper>
  );
};

export default Wishlist;
