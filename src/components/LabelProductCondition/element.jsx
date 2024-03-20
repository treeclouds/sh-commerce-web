import styled from "styled-components";
import { colors } from "../../utils/colors";

export const LabelTypeWrapper = styled.div`
 
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

`;
