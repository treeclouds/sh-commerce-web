import styled from "styled-components";
import { colors } from "../../utils";
import Badge from "@mui/material/Badge";

export const WrapperProfile = styled.div`
  display: grid;
  padding: 5%;
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
