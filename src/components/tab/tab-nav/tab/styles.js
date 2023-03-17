import styled from 'styled-components';
import colors from '@styles/colors';
import screens from '@styles/screens';

export const StyledTab = styled.li`
  color: ${colors.white};
  font-weight: 600;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  margin: 0 0 1rem -1rem;
  background-color: ${({ active }) => (active ? 'rgb(80, 80, 80)' : 'transparent')};
  border-radius: 0.5rem;
  padding: 1rem;
  cursor: pointer;

  svg {
    color: #1188ff;
  }

  @media ${screens.small}, ${screens.medium} {
    margin: 0;
    width: 35%;
    justify-content: center;
    padding: 0.75rem;
    font-size: 1.3rem;
    font-weight: 400;
  }
`;
