import { CardWrapper } from "./element";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useState } from "react";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Gap from "../Gap";
import TypeLabel from "../TypeLabel";
const Card = ({type="mint"}) => {
  const [favorite, setFavorite] = useState(false);

  const HandleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <CardWrapper type={type}>
      <div className="image-section">
        <img
          src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
          alt="dummy"
        />

        {favorite ? (
          <FavoriteIcon
            onClick={HandleFavorite}
            className="favorite-icon"
            fontSize="small"
          />
        ) : (
          <FavoriteBorderIcon
            onClick={HandleFavorite}
            className="favorite-icon"
            fontSize="small"
          />
        )}
      </div>

      <div className="description-section">
     
        <TypeLabel type={type}/>
        <p className="h4-bold">Product Title</p>
        <Gap height="4px"/>
        <p className="bold grey">Rp. 100,000</p>
        <Gap height="4px"/>
        <p className="label-med">
          <span className="icon-wrapper">
          <LocationOnOutlinedIcon fontSize="small" />
          </span>
          Location
          </p>
      </div>
    </CardWrapper>
  );
};

export default Card;
