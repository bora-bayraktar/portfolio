import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as S from './styles';
import colors from '@styles/colors';
import Dot from '@components/dot';
import useScrollDirection from '@hooks/useScrollDirection';

const links = [
  { title: 'About', href: '#about' },
  { title: 'More', href: '#more' },
  { title: 'Contact', href: '#contact' },
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
          <S.NavbarLink
            href="/Kemal Bora Bayraktar.pdf"
            target="_blank"
            style={{ fontWeight: 400 }}
          >
            Resume
          </S.NavbarLink>
        </S.NavbarLinksContainer>
        <S.NavbarIconsContainer />
      </S.NavbarLinksIconsContainer>

      <S.MenuIconContainer onClick={toggleMenu}>
        <S.MenuIconWrapper isMenuOpen={isMenuOpen}>
          <S.CloseMenuIcon size={20} />
          <S.MenuIcon size={20} />
        </S.MenuIconWrapper>
      </S.MenuIconContainer>
    </S.NavbarContainer>
  );
}
