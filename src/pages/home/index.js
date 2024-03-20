import React from "react";
import { Card as CardProduct, Gap, Menu } from "../../components";
import {
  CardFilter,
  HomeWrapper,
  ScrollableContainer,
  DragboxContainer,
} from "./element";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { FilterLinesIcon } from "../../images";
import { useNavigate } from "react-router-dom";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CheckIcon from "@mui/icons-material/Check";

const Home = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState(true);
  const [filterValue, setFilterValue] = React.useState("All Condition");

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const filterOptions = [
    { id: 1, label: "All Condition" },
    { id: 2, label: "Mint Condition" },
    { id: 3, label: "Brand new" },
    { id: 4, label: "Like new" },
    { id: 5, label: "Excellent" },
  ];

  const handleFilterOption=(value)=>{
    setFilterValue(value)
  }
  return (
    <>
      <HomeWrapper>
        <div className="home-header">
          <div className="home-location">
            <LocationOnOutlinedIcon />
            <p className="bold">Jakarta, Indonesia</p>
          </div>
          <div>
            <FavoriteBorderOutlinedIcon onClick={() => navigate("/wishlist")} />
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
          <CardFilter className="with-icon" onClick={() => setState(true)}>
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
          <CardProduct type="mint" onClick={() => navigate("/product-detail/1")} />
          <CardProduct type="like" />
          <CardProduct type="mint" /> <CardProduct type="like" />
          <CardProduct type="like" />
          <CardProduct type="new" />
        </div>
      </HomeWrapper>

      <SwipeableDrawer
        anchor={"bottom"}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <DragboxContainer>
          <p className="p-bold">Filter</p>
          <Gap height="10px" />
          {filterOptions.map((option, key) => (
            <React.Fragment key={option.id}>
              <div className="list-filter"  onClick={()=> handleFilterOption(option.label)}>
                <p>{option.label}</p>
                {filterValue ===option.label ? <CheckIcon fontSize="small" />:null}
              </div>
              {key === filterOptions?.length - 1 ? null : <hr />}
            </React.Fragment>
          ))}
        </DragboxContainer>
      </SwipeableDrawer>
      <Menu />
    </>
  );
};

export default Home;
