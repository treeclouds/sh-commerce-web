import styled from "styled-components";
import { colors } from "../../utils";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20% auto;
  padding: 4% 5%;
  border-radius: 8px;
  background-color: ${colors.grey100};

  position: relative;
  img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 50%;
  }
  p {
    display: flex;
    align-items: center;
    gap: 0.21rem;
  }
  .verified-banner {
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: row;
    gap: 0.2rem;
    color: ${colors.white1};
    background-color: ${colors.purple700};

    align-items: center;
    padding:2%;
    border-radius: 0 8px 0 8px;
    img {
      width: 1rem;
      height: 1rem;
    }
  }
`;
