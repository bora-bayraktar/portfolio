import styled from 'styled-components';
import colors from '../../styles/colors';

import Link from '../link';
import SocialIcons from '../social-icons';

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  visibility: ${(props) => (props.isMenuOpen ? 'visible' : 'hidden')};
`;

export const MenuWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const Left = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${(props) => (props.isMenuOpen ? '80%' : '0')};
  transition: all 0.6s cubic-bezier(1, 0, 0, 1);
  background-color: white;
  z-index: 2;
`;

export const Middle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: ${(props) => (props.isMenuOpen ? '1' : '0')};
  transition: all 0.5s cubic-bezier(1, 0, 0, 1);
  background-color: ${colors.orange};
`;

export const Right = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: ${(props) => (props.isMenuOpen ? '18px' : '0')};
  transition: all 0.6s cubic-bezier(1, 0, 0, 1);
  background-color: white;
  z-index: 2;
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: ${(props) => (props.isMenuOpen ? '18px' : '0')};
  width: 100%;
  transition: all 0.6s cubic-bezier(1, 0, 0, 1);
  background-color: white;
  z-index: 2;
`;

export const LeftContent = styled.div`
  height: 100%;
  padding: 100px 40px 70px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MenuLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const LinkMask = styled.span`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 28px;
  margin: 5px 0;
`;

export const MenuLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 2rem;
  font-weight: 900;
  transform: ${(props) => (props.isMenuOpen ? 'translateY(0)' : 'translateY(115%)')};
  transition: ${(props) => (props.isMenuOpen ? 'all 0.4s cubic-bezier(1, 0, 0, 1)' : 'unset')};
  transition-delay: ${(props) => props.delay};
`;

export const MenuIconsContainer = styled(SocialIcons)`
  max-width: 12rem;
  margin-top: 50px;
  transform: ${(props) => (props.isMenuOpen ? 'translateY(0)' : 'translateY(100%)')};
  transition: ${(props) => (props.isMenuOpen ? 'all 0.4s cubic-bezier(1, 0, 0, 1)' : 'unset')};
  transition-delay: 0.3s;
  overflow: hidden;
`;

export const GitHubOpenSource = styled.a`
  font-size: 1.2rem;
  font-weight: 700;
  transform: ${(props) => (props.isMenuOpen ? 'translateY(0)' : 'translateY(100%)')};
  transition: ${(props) => (props.isMenuOpen ? 'all 0.4s cubic-bezier(1, 0, 0, 1)' : 'unset')};
  transition-delay: 0.3s;
  overflow: hidden;
  white-space: nowrap;

  svg {
    position: relative;
    width: 35px;
    top: 8px;
    left: 0;
  }
`;

export const FirstLine = styled.p``;

export const SecondLine = styled.p`
  margin-top: -10px;
`;
