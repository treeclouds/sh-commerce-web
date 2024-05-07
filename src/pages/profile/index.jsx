import React, { useState } from "react";
import { Card as CardProduct, Gap, Header, Menu } from "../../components";
import {
  ChevronRight,
  FilterLinesIcon,
  LocationIcon,
  RatingIcon,
  VerifiedPurpleIcon,
} from "../../images";
import {
  CustomBadge,
  CustomTabs,
  DetailWrapper,
  PicturWrapper,
  WrapperOrder,
  WrapperProfile,
  GreyBackgroundTextField,
  ScrollableBox,
} from "./element";
import Tab from "@mui/material/Tab";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { CardFilter, ScrollableContainer } from "../home/element";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const a11yProps = (index) => {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  };
  const CustomTabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <React.Fragment>{children}</React.Fragment>}
      </div>
    );
  };

  const [value, setValue] = useState(0);
  const [setState] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <div
          className="detail-items"
          onClick={() => navigate("/profile-rating")}
        >
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
      <Gap height={"20px"} />

      <div>
        <CustomTabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Listing" {...a11yProps(0)} />
          <Tab label="Transaction" {...a11yProps(1)} />
        </CustomTabs>
      </div>
      <Gap height={"20px"} />
      <CustomTabPanel value={value} index={0}>
        <div>
          <GreyBackgroundTextField
            id="filled-start-adornment"
            fullWidth
            InputProps={{
              startAdornment: <SearchOutlinedIcon position="start" />,
            }}
            variant="outlined"
          />
          <Gap height={"10px"} />

          <ScrollableContainer>
            <CardFilter className="with-icon" onClick={() => setState(true)}>
              <img src={FilterLinesIcon} alt="icon-filter" />
              <p>Filter </p>
            </CardFilter>
            <CardFilter>Location</CardFilter>
            <CardFilter>Brand</CardFilter>
            <CardFilter>Category</CardFilter>
          </ScrollableContainer>
          <Gap height="10px" />

          <div className="card-container">
            <CardProduct
              type="mint"
              onClick={() => navigate("/product-detail/1")}
            />
            <CardProduct type="like" />
            <CardProduct type="mint" />
            <CardProduct type="like" />
            <CardProduct type="like" />
            <CardProduct type="new" />
          </div>
          <Gap height={"80px"} />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ScrollableBox>
          <WrapperOrder>
            <div className="order-content">
              <div>
                <p className="label-med">My Earning</p>
                <p className="h5 bold">Rp. 500,000</p>
              </div>
            </div>
            <div>
              <img src={ChevronRight} alt="arrow" />
            </div>
          </WrapperOrder>
          <Gap height={"10px"} />

          <WrapperOrder>
            <div className="order-content">
              <div>
                <p className="label-med">Another Earning</p>
                <p className="h5 bold">Rp. 600,000</p>
              </div>
            </div>
            <div>
              <img src={ChevronRight} alt="arrow" />
            </div>
          </WrapperOrder>

          <Gap height={"50px"} />
        </ScrollableBox>
      </CustomTabPanel>

      <Menu />
    </WrapperProfile>
  );
};

export default Profile;
