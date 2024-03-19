import styled from "styled-components";
import { colors } from "../../utils/colors";

export const CardWrapper = styled.div`
  display: grid;
  border: 1.268px solid ${colors.natural40};
  box-shadow: 0px 1.268px 2.536px 0px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  overflow: hidden;

  .type-section {
    ${(props) => {
      function getConditionStyles(conditionText) {
        switch (conditionText) {
          case "mint":
            return {
              border: `1px solid ${colors.green700}`,
              borderRadius: "5px",
              width: "max-content",
              padding: "2%",
              color: colors.green700,
              backgroundColor: colors.green100,
            };
          case "like":
            return {
              border: `1px solid ${colors.blue700}`,
              borderRadius: "5px",
              width: "max-content",
              padding: "2%",
              color: colors.blue700,
              backgroundColor: colors.blue100,
            };
          case "new":
            return {
              border: `1px solid ${colors.teal700}`,
              borderRadius: "5px",
              width: "max-content",
              padding: "2%",
              color: colors.teal700,
              backgroundColor: colors.teal100,
            };
          default:
            return {}; // Default empty styles
        }
      }
      const conditionStyles = getConditionStyles(props.type);
      return `
        border: ${conditionStyles.border || "none"};
        border-radius: ${conditionStyles.borderRadius || "none"};
        width: ${conditionStyles.width || "auto"};
        padding: ${conditionStyles.padding || "0"};
        color: ${conditionStyles.color || "inherit"};
        background-color: ${conditionStyles.backgroundColor || "transparent"};
      `;
    }}
  }
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
