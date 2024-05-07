import React from "react";
import { Header } from "../../components";
import {
  WrapperSetting,
  WrapperProfile,
  ItemSetting,
  SignOutWrapper,
} from "./element";
import {
  BlockedAccountIcon,
  ChangePasswordIcon,
  ChevronRight,
  CustomerServiceIcon,
  DeleteAccountIcon,
  FAQIcon,
  HelpCenterIcon,
  HouseIcon,
  NotificationIcon,
  ProfileIconSetting,
} from "../../images";
import { useNavigate } from "react-router-dom";

const ProfileRating = () => {
  const navigate = useNavigate();
  const handleUrl = (url) => {
    navigate(url);
  };
  return (
    <WrapperProfile>
      <WrapperSetting>
        <Header title="Settings" />
        <br />
        <br />
        <br />
        <ItemSetting onClick={() => handleUrl("/edit-profile")}>
          <div className="icon-container">
            <img src={ProfileIconSetting} alt="profile-icon" />
            <p>Edit Profile</p>
          </div>
          <div className="icon-container">
            <img src={ChevronRight} alt="ChevronRight" />
          </div>
        </ItemSetting>
        <ItemSetting onClick={() => handleUrl("/address-list")}>
          <div className="icon-container">
            <img src={HouseIcon} alt="profile-icon" />
            <p className="reg">My Address List</p>
          </div>
          <div className="icon-container">
            <img src={ChevronRight} alt="ChevronRight" />
          </div>
        </ItemSetting>
        <ItemSetting onClick={() => handleUrl("/notification")}>
          <div className="icon-container">
            <img src={NotificationIcon} alt="profile-icon" />
            <p className="reg">Notification</p>
          </div>
          <div className="icon-container">
            <img src={ChevronRight} alt="ChevronRight" />
          </div>
        </ItemSetting>
      </WrapperSetting>
      <br />
      <br />
      <WrapperSetting>
        <ItemSetting onClick={() => handleUrl("/edit-profile")}>
          <div className="icon-container">
            <img src={ChangePasswordIcon} alt="profile-icon" />
            <p>Change Password</p>
          </div>
          <div className="icon-container">
            <img src={ChevronRight} alt="ChevronRight" />
          </div>
        </ItemSetting>
        <ItemSetting onClick={() => handleUrl("/address-list")}>
          <div className="icon-container">
            <img src={BlockedAccountIcon} alt="profile-icon" />
            <p className="reg">Blocked</p>
          </div>
          <div className="icon-container">
            <p className="total-blocked">8 Users</p>
            <img src={ChevronRight} alt="ChevronRight" />
          </div>
        </ItemSetting>
        <ItemSetting onClick={() => handleUrl("/notification")}>
          <div className="icon-container">
            <img src={DeleteAccountIcon} alt="profile-icon" />
            <p className="reg">Request account deletion</p>
          </div>
          <div className="icon-container"></div>
        </ItemSetting>
      </WrapperSetting>
      <br />
      <br />
      <WrapperSetting>
        <ItemSetting onClick={() => handleUrl("/edit-profile")}>
          <div className="icon-container">
            <img src={HelpCenterIcon} alt="profile-icon" />
            <p>Help Center</p>
          </div>
          <div className="icon-container">
            <img src={ChevronRight} alt="ChevronRight" />
          </div>
        </ItemSetting>
        <ItemSetting onClick={() => handleUrl("/address-list")}>
          <div className="icon-container">
            <img src={FAQIcon} alt="profile-icon" />
            <p className="reg">FAQ</p>
          </div>
          <div className="icon-container">
            <img src={ChevronRight} alt="ChevronRight" />
          </div>
        </ItemSetting>
        <ItemSetting onClick={() => handleUrl("/notification")}>
          <div className="icon-container">
            <img src={CustomerServiceIcon} alt="profile-icon" />
            <p className="reg">Our Customer Service</p>
          </div>
          <div className="icon-container">
            <img src={ChevronRight} alt="ChevronRight" />
          </div>
        </ItemSetting>
      </WrapperSetting>
      <br />
      <br />
      <SignOutWrapper>
        <p>Sign Out</p>
      </SignOutWrapper>
      <br />
      <br />
      <center>App Version 1.0</center>
      <br />
      <br /> <br />
      <br /> <br />
      <br />
    </WrapperProfile>
  );
};

export default ProfileRating;
