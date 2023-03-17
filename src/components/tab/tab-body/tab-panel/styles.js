import styled from 'styled-components';
import colors from '@styles/colors';
import screens from '@styles/screens';

export const StyledTabPanel = styled.div`
  padding: 3rem;
  height: 500px;
  width: 100%;
  border-radius: 0 1rem 1rem 0;
  background-color: ${colors.black};
  color: ${colors.white};
  display: ${({ active }) => (active ? 'block' : 'none')};

  @media ${screens.small}, ${screens.medium} {
    border-radius: 0 0 1rem 1rem;
  }
`;
