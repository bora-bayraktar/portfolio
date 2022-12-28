import styled from 'styled-components';
import screens from '../../styles/screens';

export const Main = styled.main`
  padding: 10rem;

  @media ${screens.small} {
    padding: 4rem;
  }
`;
