import React, { useState } from "react";
import { Header, Menu } from "../../components";
import {
  CommentSection,
  ContentAllWrapper,
  CustomTabs,
  StyledLinearProgress,
  WrapperProfile,
  CommentContainer,
} from "./element";
import Tab from "@mui/material/Tab";
import { RatingIcon, TennisRacket } from "../../images";
import { CardFilter, ScrollableContainer } from "../home/element";

const ProfileRating = () => {
  const [value, setValue] = useState(0);
  const averageStar = 3;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
  return (
    <React.Fragment>
      <div style={{ padding: "5%" }}>
        <Header title="User rating" />
      </div>
      <WrapperProfile>
        <div>
          <CustomTabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="All" {...a11yProps(0)} />
            <Tab
              label="From Buyer"
              {...a11yProps(1)}
              style={{ whiteSpace: "nowrap" }}
            />
            <Tab
              label="From Seller"
              {...a11yProps(2)}
              style={{ whiteSpace: "nowrap" }}
            />
          </CustomTabs>
        </div>

        <CustomTabPanel value={value} index={0}>
          <ContentAllWrapper>
            <div className="section-rating-score">
              <div>
                <p className="h1-bold">5.0</p>
                <div className="star-section">
                  {[...Array(averageStar)].map((_, index) => (
                    <img key={index} src={RatingIcon} alt="rating" />
                  ))}
                </div>
                <p className="label-reg grey">5 reviews</p>
              </div>
              <div className="separator" />
              <div className="progress-section">
                <div className="progress-item">
                  <label className="label-reg"> 5</label>
                  <div style={{ width: "100%" }}>
                    <StyledLinearProgress variant="determinate" value={80} />
                  </div>
                </div>
                <div className="progress-item">
                  <label className="label-reg"> 4</label>
                  <div style={{ width: "100%" }}>
                    <StyledLinearProgress variant="determinate" value={50} />
                  </div>
                </div>
                <div className="progress-item">
                  <label className="label-reg"> 3</label>
                  <div style={{ width: "100%" }}>
                    <StyledLinearProgress variant="determinate" value={50} />
                  </div>
                </div>
                <div className="progress-item">
                  <label className="label-reg"> 2</label>
                  <div style={{ width: "100%" }}>
                    <StyledLinearProgress variant="determinate" value={10} />
                  </div>
                </div>
                <div className="progress-item">
                  <label className="label-reg"> 1</label>
                  <div style={{ width: "100%" }}>
                    <StyledLinearProgress variant="determinate" value={0} />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <ScrollableContainer>
              <CardFilter>Newest</CardFilter>
              <CardFilter>Highest</CardFilter>
              <CardFilter>Lowest</CardFilter>
            </ScrollableContainer>
            <br />
            <br />
            <CommentContainer>
              <CommentSection>
                <div>
                  <img src={TennisRacket} alt="product" />
                </div>
                <div className="details-section">
                  <div className="rate-comment-section">
                    <div>
                      {[...Array(averageStar)].map((_, index) => (
                        <img key={index} src={RatingIcon} alt="rating" />
                      ))}
                    </div>
                    <p className="caption-reg">3 days ago</p>
                  </div>
                  <p className="caption-medium">Jimmy said</p>
                  <br />
                  <p className="label-reg">Good products and fast</p>
                </div>
              </CommentSection>
              <CommentSection>
                <div>
                  <img src={TennisRacket} alt="product" />
                </div>
                <div className="details-section">
                  <div className="rate-comment-section">
                    <div>
                      {[...Array(averageStar)].map((_, index) => (
                        <img key={index} src={RatingIcon} alt="rating" />
                      ))}
                    </div>
                    <p className="caption-reg">3 days ago</p>
                  </div>
                  <p className="caption-medium">Jimmy said</p>
                  <br />
                  <p className="label-reg">Good products and fas</p>
                </div>
              </CommentSection>
            </CommentContainer>
          </ContentAllWrapper>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <ContentAllWrapper>
            <CommentContainer>
              <CommentSection>
                <div>
                  <img src={TennisRacket} alt="product" />
                </div>
                <div className="details-section">
                  <div className="rate-comment-section">
                    <div>
                      {[...Array(averageStar)].map((_, index) => (
                        <img key={index} src={RatingIcon} alt="rating" />
                      ))}
                    </div>
                    <p className="caption-reg">3 days ago</p>
                  </div>
                  <p className="caption-medium">Jimmy said</p>
                  <br />
                  <p className="label-reg">Good products and fas</p>
                </div>
              </CommentSection>
            </CommentContainer>
          </ContentAllWrapper>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <ContentAllWrapper>
            <CommentContainer>
              <CommentSection>
                <div>
                  <img src={TennisRacket} alt="product" />
                </div>
                <div className="details-section">
                  <div className="rate-comment-section">
                    <div>
                      {[...Array(averageStar)].map((_, index) => (
                        <img key={index} src={RatingIcon} alt="rating" />
                      ))}
                    </div>
                    <p className="caption-reg">3 days ago</p>
                  </div>
                  <p className="caption-medium">Jimmy said</p>
                  <br />
                  <p className="label-reg">Good products and fas</p>
                </div>
              </CommentSection>
            </CommentContainer>
          </ContentAllWrapper>
        </CustomTabPanel>

        <Menu />
      </WrapperProfile>
    </React.Fragment>
  );
};

export default ProfileRating;
