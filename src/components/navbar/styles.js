import styled from 'styled-components';
import colors from '../../styles/colors';
import screens from '../../styles/screens';

import Link from '../link';
import SocialIcons from '../social-icons';

const navbarHeight = '60px';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${navbarHeight};

  position: fixed;
  top: ${(props) => (props.isHidden ? `-${navbarHeight}` : 0)};
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2.5rem;
  background: ${colors.white};

  z-index: 3;
  transition: all 0.1s ease-in-out;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

export const NavbarLogoContainer = styled.a`
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
  }

  .gatsby-image-wrapper div {
    border-radius: 50%;
  }
`;

export const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  font-weight: 700;
  transition: all 0.2s ease-in-out;

  @media (hover: hover) {
    &:hover {
      color: ${colors.orange};
    }
  }
`;

export const NavbarLinksIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;

  @media ${screens.small} {
    display: none;
  }

  @media ${screens.medium} {
    display: none;
  }
`;

export const NavbarLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
  max-width: 50rem;
  margin-left: 1rem;
`;

export const NavbarLink = styled(Link)`
  font-weight: 700;
`;

export const NavbarIconsContainer = styled(SocialIcons)`
  width: 25%;
  max-width: 20rem;
`;

export const MenuIconContainer = styled.a`
  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;

  @media ${screens.large} {
    display: none;
  }
`;

export const MenuIconWrapper = styled.div`
  width: 200%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 30%;
  margin: auto 0;
  transform: ${(props) => (props.isMenuOpen ? 'translateX(77%)' : 'translateX(0)')};
  transition: all 0.4s cubic-bezier(1, 0, 0, 1);
`;
