import styled from 'styled-components';
import screens from '@styles/screens';

export const StyledTabContextContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 100rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 1rem;

  @media ${screens.small}, ${screens.medium} {
    flex-direction: column;
  }
`;
