import styled from "styled-components";
import { LandingPageBackground } from "../../images";
import { colors } from "../../utils";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100vh;
  text-align: center;


  background-image: url(${LandingPageBackground});
  background-size: cover;
  background-position: center;

  color: ${colors.backgroundColor};
  h3 {
    font-size: 22px;
  }
  h1 {
    font-weight: 700;
  }
`;
