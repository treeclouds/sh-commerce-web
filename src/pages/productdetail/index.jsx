import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  CardProfile,
  Gap,
  Header,
  LabelProductCondition,
  MenuProduct
} from "../../components";
import { Wrapper } from "./element";
const ProductDetail = () => {
  const { id } = useParams();
  const [showMore, setShowMore] = useState(false);
  let dummyImg =
    "https://images.unsplash.com/photo-1710866566821-faec7d460f0e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let dummyImg2 =
    "https://images.unsplash.com/photo-1710327853365-44a7ee42209f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const youtubeVideoId = "VTM_QFp-4EQ";
  let text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <Wrapper>
      <Header title={`Product Detail #${id}`} />
      <MenuProduct/>

      <Gap height="20px" />
      <Splide>
        <SplideSlide>
          <img className="slider-image" src={dummyImg} alt="ABCV 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={dummyImg2} className="slider-image" alt="ABCV 2" />
        </SplideSlide>
        <SplideSlide>
          <iframe
            className="slider-video"
            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </SplideSlide>
      </Splide>

      <Gap height="20px" />
      <div>
        <LabelProductCondition type="mint" />
        <br/>
        <p className="h3-bold">Rp 5.000.000</p>
        <p className="h5-reg">Product name</p>
        <div className="share-section">
          <div>
            <p className="label-reg">
              <LocationOnOutlinedIcon fontSize="small" />
              Happy Town, Capital City
            </p>
            <p className="label-reg">Uploaded on 16 September</p>
          </div>
          <div className="icon-section">
            <ShareOutlinedIcon fontSize="small"/>
            <FavoriteBorderOutlinedIcon fontSize="small"/>
          </div>
        </div>
      </div>
      <Gap height="20px" />
      <div>
        <p className="p-bold">Product details</p>
        <Gap height="10px" />
        <div className="delivery-section">
          <p className="p-reg">Category</p>
          <p className="p-semibold">Racket</p>
        </div>
        <hr className="hr-grey" />
        <div className="delivery-section">
          <p className="p-reg">Size (W x L x H)</p>
          <p className="p-semibold">30 x 60 x 3 cm</p>
        </div>
        <hr className="hr-grey" />
        <div className="delivery-section">
          <p className="p-reg">Weight</p>
          <p className="p-semibold">2 kg</p>
        </div>
        <hr className="hr-grey" />
        <div className="delivery-section">
          <p className="p-reg">Brand</p>
          <p className="p-semibold">Wilson</p>
        </div>
        <hr className="hr-grey" />
        <div className="delivery-section">
          <p className="p-reg">Material</p>
          <p className="p-semibold">Polycarbonate</p>
        </div>
        <hr className="hr-grey" />
        <div className="delivery-section">
          <p className="p-reg">Stock</p>
          <p className="p-semibold">1</p>
        </div>
      </div>
      <Gap height="20px" />
      <div>
        <p className="p-bold">Product description</p>
        <Gap height="10px" />
        <p className="p-semibold">
          {showMore ? text : `${text.slice(0, 50)}...`}
        </p>
        <p className="p-bold show-more" onClick={() => setShowMore(!showMore)}>
          {!showMore ? "Show more" : "Show less"}
        </p>
      </div>
      <Gap height="20px" />
      <div>
        <p className="p-bold">Delivery method</p>
        <Gap height="10px" />
        <div className="delivery-section">
          <p className="p-reg">Delivery</p>
          <p className="p-semibold">Est. 1 - 2 days</p>
        </div>
        <hr className="hr-grey" />
        <div className="delivery-section">
          <p className="p-reg">Meet-up</p>
          <p className="p-semibold">
            <LocationOnOutlinedIcon fontSize="small" />
            Happy Town, Capital City
          </p>
        </div>
      </div>

      <hr className="hr-grey" />

      <Gap height="20px" />
      <p className="p-bold">Seller Profile</p>
      <Gap height="10px" />
      <CardProfile />
      <Gap height="80px" />

    </Wrapper>
  );
};

export default ProductDetail;
