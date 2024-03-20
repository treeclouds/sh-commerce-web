import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: grid;
  padding: 5%;

  .card-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    row-gap: 1rem;
  }

  .home-header {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
  .home-location {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.4rem;
  }
`;

export const ScrollableContainer = styled.div`
  display: grid;
  grid-auto-flow: column; /* Arrange grid items in columns horizontally */
  gap: 3%; /* Add gap between grid items */
  overflow-x: auto; /* Enable horizontal scrolling */
`;

export const CardFilter = styled.div`
  border-radius: 8px;
  border: 1px solid var(--gray-800, #252f3f);
  background: var(--Surface, #fff);
  width: max-content;
  padding: 10px;
  align-items: center;
  display: grid;
  grid-template-columns: auto 1fr ;
 
`;

export const DragboxContainer = styled.div`
  display: grid;
  padding:5% ;

  .list-filter{
    display: flex;
    flex-direction: row;
    justify-content: space-between ;
    align-items: center ;
    padding: 5% 0;
  }

`


