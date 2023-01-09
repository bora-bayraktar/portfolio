import styled from 'styled-components';
import colors from '@styles/colors';

export const StyledTabPanel = styled.div`
  padding: 5rem;
  height: 500px;
  width: 100%;
  border-radius: 1rem;
  background-color: ${colors.black};
  color: ${colors.white};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: ${({ active }) => (active ? 'block' : 'none')};
`;
