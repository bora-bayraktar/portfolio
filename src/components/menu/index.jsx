import React from 'react';
import * as S from './styles';
import { GithubLogoIcon } from '../icons';

const links = [
  { title: 'About.', href: '/', delay: '0.3s' },
  { title: 'Skills.', href: '/', delay: '0.35s' },
  { title: 'Experience.', href: '/', delay: '0.4s' },
  { title: 'Education.', href: '/', delay: '0.45s' },
];

export default function Menu({ isMenuOpen, toggleMenu }) {
  return (
    <S.MenuContainer isMenuOpen={isMenuOpen}>
      <S.MenuWrapper>
        <S.Left isMenuOpen={isMenuOpen}>
          <S.LeftContent>
            <S.MenuLinkContainer>
              {links.map((link) => (
                <S.LinkMask>
                  <S.MenuLink
                    key={link.title}
                    href={link.href}
                    isMenuOpen={isMenuOpen}
                    underlined={false}
                    delay={link.delay}
                  >
                    {link.title}
                  </S.MenuLink>
                </S.LinkMask>
              ))}
              <S.LinkMask style={{ height: '30px' }}>
                <S.MenuLink
                  href=""
                  isMenuOpen={isMenuOpen}
                  underlined={true}
                  delay="0.5s"
                  style={{ fontWeight: 400 }}
                >
                  Resume
                </S.MenuLink>
              </S.LinkMask>
              <S.MenuIconsContainer isMenuOpen={isMenuOpen} iconSize={18} />
            </S.MenuLinkContainer>

            <S.GitHubOpenSource href="/" isMenuOpen={isMenuOpen}>
              <S.FirstLine>This website is</S.FirstLine>
              <S.SecondLine>
                open-source on <GithubLogoIcon />.
              </S.SecondLine>
            </S.GitHubOpenSource>
          </S.LeftContent>
        </S.Left>
        <S.Middle isMenuOpen={isMenuOpen} onClick={toggleMenu} />
        <S.Right isMenuOpen={isMenuOpen} onClick={toggleMenu} />
        <S.Bottom isMenuOpen={isMenuOpen} />
      </S.MenuWrapper>
    </S.MenuContainer>
  );
}
