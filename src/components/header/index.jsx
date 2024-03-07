import React from "react";
import {
  ChatDark,
  ChatLight,
  HomeDark,
  HomeLight,
  ProfileDark,
  ProfileLight,
  UpdateDark,
  UpdateLight,
  UploadDark,
  UploadLight,
} from "../../images";
import { WrapperHeader } from "./element";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const { pathname } = location;

  return (
    <WrapperHeader >
      <div className={pathname === "/" ? "active" : ""}>
        <img src={pathname === "/" ? HomeDark : HomeLight} alt="home-icon" />
        <p>Home</p>
      </div>
      <div className={pathname === "/chat" ? "active" : ""}>
        <img
          src={pathname === "/chat" ? ChatDark : ChatLight}
          alt="chat-icon"
        />
        <p>Chat</p>
      </div>
      <div className={pathname === "/upload" ? "active" : ""}>
        <img
          src={pathname === "/upload" ? UploadDark : UploadLight}
          alt="home-icon"
        />
        <p>Upload</p>
      </div>
      <div className={pathname === "/updates" ? "active" : ""}>
        <img
          src={pathname === "/updates" ? UpdateDark : UpdateLight}
          alt="home-icon"
        />
        <p>Updates</p>
      </div>
      <div className={pathname === "/profile" ? "active" : ""}>
        <img
          src={pathname === "/profile" ? ProfileDark : ProfileLight}
          alt="profile"
        />
        <p>Profile</p>
      </div>
    </WrapperHeader>
  );
};

export default Header;
