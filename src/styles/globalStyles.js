import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import fonts from './fonts';
import screens from './screens';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    font-size: 62.5%;
  }

  body, 
  #___gatsby, 
  #gatsby-focus-wrapper {
    width: 100%;
    height: 100%;

    background-color: ${colors.white};
    font-family: ${fonts.montesrrat};
    color: ${colors.black};
    font-size: 1.6rem;

    @media ${screens.small} {
      font-size: 1.3rem;
    }

    @media ${screens.medium} {
      font-size: 1.4rem;
    }
  }

  a {
    text-decoration: none;
    color: inherit;

    &:visited {
      color: inherit;
    }
  }
`;
