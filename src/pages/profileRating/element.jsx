import styled from "styled-components";
import { colors } from "../../utils";
import Badge from "@mui/material/Badge";

import Tabs from "@mui/material/Tabs";
import { TextField } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
export const WrapperProfile = styled.div`
  display: grid;

  .card-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    row-gap: 1rem;
  }
`;
export const PicturWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 5%;
  height: 100px;
  align-items: center;
  text-align: center;
  .border-grey {
    border-left: 1px solid #d2d6dc;
    border-right: 1px solid #d2d6dc;
  }
  .img-circle {
    border-radius: 50%; /* Makes the border circular */
    object-fit: cover; /* Scales the image to cover the container */
    width: 48px; /* Adjust width as needed */
    height: 48px; /* Adjust height as needed */
    float: left;
  }
`;

export const DetailWrapper = styled.div`
  display: grid;
  padding: 0 5%;
  grid-row-gap: 5px;
  .detail-items {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  img {
    width: 15px;
    height: 15px;
    object-fit: cover;
  }
`;

export const WrapperOrder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.grey100};
  padding: 5%;
  border-radius: 10px;
  .order-content {
    display: flex;
    flex-direction: row;
    gap: 0.81rem;
  }
`;

export const CustomBadge = styled(Badge)`
  .MuiBadge-badge {
    background-color: ${colors.green500};
    color: white;
    font-weight: bold;
  }
`;

export const CustomTabs = styled(Tabs)`
  .MuiTabs-indicator {
    background-color: ${colors.green500};
  }
`;

export const GreyBackgroundTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    background-color: ${colors.grey100};
  }
`;

export const ScrollableBox = styled.div`
  display: grid;
  overflow-x: auto;
`;

export const ContentAllWrapper = styled.div`
  padding: 5%;

  .separator {
    border-right: 1px solid ${colors.natural40};
    height: 150%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .section-rating-score {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }
  .star-section {
    img {
      width: 16px;
      height: 16px;
      object-fit: cover;
    }
  }
  .h1-bold {
    font-family: Inter;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .grey {
    color: ${colors.grey700};
  }
  .progress-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
  .progress-section {
    padding: 0 5%;
  }
`;

export const StyledLinearProgress = styled(LinearProgress)`
  &.css-eglki6-MuiLinearProgress-root {
    height: 10px; /* Set the custom height */
    border-radius: 5px; /* Set the border radius */

    .MuiLinearProgress-barColorPrimary {
      background-color: #faca15; /* Set the custom progress bar color */
    }
  }
`;

export const CommentSection = styled.div`
  display: grid;
  grid-template-columns: 30% auto;
  margin-bottom: 5%;
  background-color: ${colors.backgroundColor};
  padding: 5% 0;

  p {
    text-align: justify;
  }
  img {
    object-fit: cover;
    width: 60px;
    height: 60px;
  }
  .rate-comment-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img {
      width: 13px;
      height: 13px;
      object-fit: cover;
    }
  }
`;

export const CommentContainer = styled.div`
  background-color: ${colors.greyBackground};
`;
