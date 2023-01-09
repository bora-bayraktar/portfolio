import styled from 'styled-components';
import colors from '@styles/colors';
import screens from '@styles/screens';

export const StyledTab = styled.li`
  width: ${({ length }) => `calc(65% / ${length} - ${length - 1} * 1rem / ${length})`};
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 2px solid ${colors.black};
  border-radius: 1rem;
  background: linear-gradient(${colors.black}, ${colors.black}) no-repeat;
  color: ${(props) => (props.active ? colors.white : colors.black)};
  font-weight: 800;
  display: flex;
  align-items: center;
  position: relative;
  transition: ${(props) =>
      props.active
        ? 'background-position 0.3s cubic-bezier(1, 0, 0, 1), border 0s linear 0.3s'
        : 'background-position 0.3s cubic-bezier(1, 0, 0, 1)'},
    background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  background-position: ${(props) => (props.active ? '0px' : '0px 100px')};
  cursor: pointer;

  svg {
    color: ${(props) => (props.active ? colors.white : colors.black)};
    transition: color 0.3s ease-in-out;
  }

  @media ${screens.small}, ${screens.medium} {
    width: ${({ length }) => `calc(100% / ${length} - ${length - 1} * 1rem / ${length})`};
    padding: 1rem;
    justify-content: center;
    text-align: center;
  }
`;
