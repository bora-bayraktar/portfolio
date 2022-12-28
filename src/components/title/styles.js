import styled from 'styled-components';
import screens from '../../styles/screens';

export const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
`;

export const StyledTitle = styled.h2`
  text-align: left;
  color: ${(props) => props.color};
  font-size: 7rem;
  font-weight: 900;
  line-height: 1;

  @media ${screens.small} {
    font-size: 4rem;
  }
`;
