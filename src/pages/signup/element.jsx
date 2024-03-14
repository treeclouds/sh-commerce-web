import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 5%;

  display: flex;
  flex-direction: column;
  min-height: 90vh;
  .form {
    flex-grow: 1;
  }
  .warning-password{
    display:flex;
    flex-direction:row;
    gap: 10px;
    align-items:center ;
  }
`;
