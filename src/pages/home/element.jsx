import styled from 'styled-components'



export const HomeWrapper =styled.div`
  display: grid;
  padding: 5%;

  .card-container{
    display: grid;
    grid-template-columns: 1fr 1fr ;
    column-gap:1rem ;
    row-gap: 1rem;
  }

  .home-header{
    display: flex;
    align-items: center;
    flex-direction:row;
    justify-content:space-between ;
  }
  .home-location{
    display:flex;
    flex-direction:row ;
    align-items:center;
    gap:0.4rem;

  }
`