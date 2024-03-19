import React from "react";
import { Card as CardProduct, Gap, Menu } from "../../components";
import { CardFilter, HomeWrapper, ScrollableContainer } from "./element";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { FilterLinesIcon } from "../../images";

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
            startAdornment: <SearchOutlinedIcon position="start" />,
          }}
          variant="outlined"
        />
        <Gap height="10px" />
        <ScrollableContainer>
          <CardFilter className="with-icon">
            <img src={FilterLinesIcon} alt="icon-filter" />
            <p>Filter </p>
          </CardFilter>
          <CardFilter>Location</CardFilter>
          <CardFilter>Brand</CardFilter>
          <CardFilter>Category</CardFilter>
          <CardFilter>Category</CardFilter>
          <CardFilter>Category</CardFilter>
          <CardFilter>Category</CardFilter>

    
         
         
        </ScrollableContainer>
        <Gap height="10px" />

        <div className="card-container">
          <CardProduct type="mint" />
          <CardProduct type="like" />
          <CardProduct type="mint" /> <CardProduct type="like" />
          <CardProduct type="like" />
          <CardProduct type="new" />
        </div>
      </HomeWrapper>

      <Menu />
    </>
  );
};

export default Home;
