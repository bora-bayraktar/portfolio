import styled from 'styled-components';
import colors from '@styles/colors';
import fonts from '@styles/fonts';
import screens from '@styles/screens';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  background: linear-gradient(90deg, ${colors.orange} 50%, ${colors.white} 50%);
`;

export const HeaderHelloNameDiv = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 2rem;
  padding: 0 2rem;
  text-align: center;
  align-self: center;
  font-family: ${fonts.inter};

  @media ${screens.large} {
    margin-bottom: 8rem;
  }
`;

export const HeaderHello = styled.p`
  font-size: 3rem;
  font-weight: bold;

  @media ${screens.large} {
    font-size: 3.5rem;
  }
`;

export const HeaderName = styled.h1`
  font-size: 4rem;
  margin: 1.2rem 0 1.5rem 0;

  @media ${screens.large} {
    font-size: 6rem;
  }
`;

export const StyledTypical = styled.p`
  font-size: 1.6rem;
  font-weight: 400;

  @media ${screens.large} {
    font-size: 2.2rem;
  }
`;
