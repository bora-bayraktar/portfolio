import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as S from './styles';
import colors from '../../styles/colors';

import Dot from '../dot';
import { CloseMenuIcon, MenuIcon } from '../icons';

import useScrollDirection from '../../hooks/useScrollDirection';

const links = [
  { title: 'About', href: '/' },
  { title: 'Skills', href: '/' },
  { title: 'Experience', href: '/' },
  { title: 'Education', href: '/' },
];

export default function NavBar({ isMenuOpen, toggleMenu }) {
  const scrollDirection = useScrollDirection();

  return (
    <S.NavbarContainer isHidden={scrollDirection === 'down'}>
      <S.NavbarLogoContainer href="/">
        <StaticImage
          src="../../images/me.png"
          alt="Kemal Bora Bayraktar"
          width={40}
          height={40}
          style={{ borderRadius: '50%' }}
          loading="eager"
          formats={['AUTO', 'WEBP']}
        />
        <S.NavbarLogo title="Kemal Bora Bayraktar">
          Kemal Bora Bayraktar
          <Dot color={colors.orange} />
        </S.NavbarLogo>
      </S.NavbarLogoContainer>

      <S.NavbarLinksIconsContainer>
        <S.NavbarLinksContainer>
          {links.map((link) => (
            <S.NavbarLink key={link.title} href={link.href} underlined={false}>
              {link.title}
            </S.NavbarLink>
          ))}
          <S.NavbarLink href="/" style={{ fontWeight: 400 }}>
            Resume
          </S.NavbarLink>
        </S.NavbarLinksContainer>
        <S.NavbarIconsContainer />
      </S.NavbarLinksIconsContainer>

      <S.MenuIconContainer onClick={toggleMenu}>
        <S.MenuIconWrapper isMenuOpen={isMenuOpen}>
          <CloseMenuIcon size={20} />
          <MenuIcon size={20} />
        </S.MenuIconWrapper>
      </S.MenuIconContainer>
    </S.NavbarContainer>
  );
}
