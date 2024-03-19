import styled from "styled-components";
import { colors } from "../../utils/colors";

export const CardWrapper = styled.div`
  display: grid;
  border: 1.268px solid ${colors.natural40};
  box-shadow: 0px 1.268px 2.536px 0px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  overflow: hidden;


  .description-section {
    padding: 10% 5%;
  }

  .label-med {
    display: flex;
    align-items: center;
  }

  .icon-wrapper {
    margin-right: 4px; /* Optional: Add some spacing between the icon and text */
  }

  .grey {
    color: ${colors.natural80};
  }

  .image-section {
    position: relative;
    width: 100%;
    height: 163px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .favorite-icon {
      position: absolute;
      top: 0;
      right: 0;
      /* background-color: rgba(255, 255, 255, 0.8);  */
      padding: 5px;
      color: white;
    }
  }
`;
