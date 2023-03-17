import styled from 'styled-components';
import screens from '@styles/screens';

export const Main = styled.main`
  padding: 0 10rem;

  @media ${screens.small} {
    padding: 0 4rem;
  }
`;
