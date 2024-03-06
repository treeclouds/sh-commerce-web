import styled from 'styled-components'

export const screensize ={
    desktopUp: "(min-width: 1024px)",
    mobile: "(max-width: 768px)",
    tabletUp:"(min-width: 768px)"
}

export const GridOneThird = styled.div`
    display:'grid';
    
    @media ${screensize.desktopUp}{
        display: grid;
        grid-template-columns: repeat(3,33%);
    }
`

export const GridHalf = styled.div`
    display: grid;

    @media ${screensize.desktopUp} {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }


`

export const MobileOnly = styled.div` 
    @media ${screensize.desktopUp} {
      display: none;
    }
`

export const DesktopOnly = styled.div`
    display: none;

    @include desktop-up {
    display: block;
    }

`