import styled from "styled-components";
import { colors } from "../../utils";

export const Wrapper = styled.div`
  padding: 5%;

  .delivery-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2% 0;
  }
  p {
    display: flex;
    align-items: center;
    text-align: justify ;
  }
  .slider-image,
  .slider-video {
    width: 100%;
    height: 375px;
    object-fit: cover;
  }
  .hr-grey {
    border-color: ${colors.grey100};
  }
  .share-section{
    display:flex;
    flex-direction:row;
    justify-content: space-between ;
    align-items: center;
  }
  .icon-section{
    display:flex;
    flex-direction:row;
    gap:1rem ;
  }
`;
