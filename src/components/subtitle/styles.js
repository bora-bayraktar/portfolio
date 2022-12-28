import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import screens from '../../styles/screens';

export const Subtitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 900;

  @media ${screens.small} {
    font-size: 1.7rem;
  }
`;

export const SubtitleSpan = styled.span`
  color: ${colors.orange};
  font-family: ${fonts.comforter};
  font-size: 3.8rem;
  font-weight: 400;

  @media ${screens.small} {
    font-size: 2.7rem;
  }
`;
