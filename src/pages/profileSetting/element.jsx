import styled from "styled-components";
import { colors } from "../../utils";

export const WrapperProfile = styled.div`
  display: grid;
  background-color: ${colors.greyBackground};
  .card-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    row-gap: 1rem;
  }
`;

export const WrapperSetting = styled.div`
  background-color: ${colors.backgroundColor};
  padding: 5%;
`;
export const ItemSetting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #ccc;
  .icon-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .total-blocked {
    color: ${colors.grey400};
  }
`;

export const SignOutWrapper = styled.div`
  padding: 5%;
  background-color: ${colors.backgroundColor};
  text-align: center;
  color: ${colors.red500};

  font-weight: 600;
`;
