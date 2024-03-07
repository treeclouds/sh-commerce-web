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
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const handlePush=(url)=>{
    navigate(url)
  }

  return (
    <WrapperHeader >
      <div onClick={()=>handlePush("/home")} className={pathname === "/home" ? "active" : ""}>
        <img src={pathname === "/home" ? HomeDark : HomeLight} alt="home-icon" />
        <p>Home</p>
      </div>
      <div onClick={()=>handlePush("/chat")} className={pathname === "/chat" ? "active" : ""}>
        <img
          src={pathname === "/chat" ? ChatDark : ChatLight}
          alt="chat-icon"
        />
        <p>Chat</p>
      </div>
      <div onClick={()=>handlePush("/upload")} className={pathname === "/upload" ? "active" : ""}>
        <img
          src={pathname === "/upload" ? UploadDark : UploadLight}
          alt="home-icon"
        />
        <p>Upload</p>
      </div>
      <div onClick={()=>handlePush("/updates")} className={pathname === "/updates" ? "active" : ""}>
        <img
          src={pathname === "/updates" ? UpdateDark : UpdateLight}
          alt="home-icon"
        />
        <p>Updates</p>
      </div>
      <div onClick={()=>handlePush("/profile")} className={pathname === "/profile" ? "active" : ""}>
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
