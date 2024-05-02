import React from "react";
import { Gap, Header, Menu } from "../../components";
import {
  PicturWrapper,
  DetailWrapper,
  WrapperProfile,
  WrapperOrder,
  CustomBadge,
} from "./element";
import {
  LocationIcon,
  RatingIcon,
  VerifiedPurpleIcon,
  ChevronRight,
} from "../../images";
const Profile = () => {
  return (
    <WrapperProfile>
      <Header title="My Profile" returnIcon={"false"} />
      <PicturWrapper>
        <div>
          <img
            className="img-circle"
            src={
              "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="profile"
          />
        </div>
        <div>
          <p className="p-bold">52</p>
          <p className="caption-reg">Listing</p>
        </div>
        <div className="border-grey">
          <p className="p-bold">10</p>
          <p className="caption-reg">Available</p>
        </div>
        <div>
          <p className="p-bold">10</p>
          <p className="caption-reg">Sold</p>
        </div>
      </PicturWrapper>
      <DetailWrapper>
        <div className="detail-items">
          <div className="p-semibold">Ben</div>
          <img src={VerifiedPurpleIcon} alt="verified" />
        </div>
        <div>
          <div className="caption-reg">Member since Nov 2023</div>
        </div>
        <div className="detail-items">
          <img src={LocationIcon} alt="verified" />
          <div className="caption-reg">Happy Town, Capital City</div>
        </div>
        <div className="detail-items">
          <img src={RatingIcon} alt="verified" />
          <div className="caption-semibold"> 5.0 • Very Responsive</div>
        </div>
      </DetailWrapper>
      <Gap height={"20px"} />

      <WrapperOrder>
        <div className="order-content">
          <div>New Order </div>
          <div>
            <CustomBadge badgeContent={4} />
          </div>
        </div>
        <div>
          <img src={ChevronRight} alt="arrow" />
        </div>
      </WrapperOrder>

      <Menu />
    </WrapperProfile>
  );
};

export default Profile;
