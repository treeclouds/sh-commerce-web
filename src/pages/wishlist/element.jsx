import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 5% ;
  .content-empty{
    display: flex; /* Make it a flex container */
    flex-direction: column;
    text-align:center ;
    justify-content: center; /* Center items vertically */
    align-items: center; /* Center items horizontally */
  }

  .card-container {
    display:grid;
    grid-template-columns:1fr 1fr ;
    row-gap:1rem ;
    column-gap:1rem ;

  }
`;
