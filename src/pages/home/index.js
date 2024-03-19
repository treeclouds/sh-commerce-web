import React from "react";
import { Card, Gap, Menu } from "../../components";
import { HomeWrapper } from "./element";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Home = () => {
  return (
    <>
      <HomeWrapper>
        <div className="home-header">
          <div className="home-location">
            <LocationOnOutlinedIcon />
            <p className="bold">Jakarta, Indonesia</p>
          </div>
          <div>
          <FavoriteBorderOutlinedIcon />

          </div>
        </div>
        <Gap height="10px" />

        <TextField
          id="filled-start-adornment"
          fullWidth
          InputProps={{
            startAdornment: <SearchOutlinedIcon position="start"/>,
          }}
          variant="outlined"
        />
        <Gap height="10px" />
        <div className="card-container">
          <Card type="mint" />
          <Card type="like" />
          <Card type="mint" /> <Card type="like" />
          <Card type="like" />
          <Card type="new" />
        </div>
      </HomeWrapper>

      <Menu />
    </>
  );
};

export default Home;
