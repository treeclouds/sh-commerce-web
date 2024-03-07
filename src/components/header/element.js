import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const WrapperHeader = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;


  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  text-align: center; /* Center text horizontally */

  div{
    padding:15% ;
  }

  .active{
    border-top: 2px solid ${colors.green};
  }
`;
