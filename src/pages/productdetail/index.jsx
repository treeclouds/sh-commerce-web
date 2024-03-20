import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { CardProfile, Gap, Header } from "../../components";
import { Wrapper } from "./element";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const ProductDetail = () => {
  const { id } = useParams();
  const [showMore, setShowMore] = useState(false);
  let text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  return (
    <Wrapper>
      <Header title={`Product Detail #${id}`} />
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
        <p className="p-semibold" >{showMore ? text : `${text.slice(0, 50)}...`}</p>
        <p className="p-bold show-more" onClick={()=> setShowMore(!showMore)}>{!showMore ? "Show more":"Show less"}</p>
       
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
    </Wrapper>
  );
};

export default ProductDetail;
