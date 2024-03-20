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

  .hr-grey {
    border-color: ${colors.grey100};
  }
`;
