import React from 'react';
import * as S from './styles';

const links = [
  { title: 'About.', href: '#about', delay: '0.3s' },
  { title: 'More.', href: '#more', delay: '0.4s' },
  { title: 'Contact.', href: '#contact', delay: '0.45s' },
];

export default function Menu({ isMenuOpen, toggleMenu }) {
  return (
    <S.MenuContainer isMenuOpen={isMenuOpen}>
      <S.MenuWrapper>
        <S.Left isMenuOpen={isMenuOpen}>
          <S.LeftContent>
            <S.MenuLinkContainer>
              {links.map((link) => (
                <S.LinkMask key={link.title}>
                  <S.MenuLink
                    href={link.href}
                    isMenuOpen={isMenuOpen}
                    underlined={false}
                    delay={link.delay}
                    onClick={toggleMenu}
                  >
                    {link.title}
                  </S.MenuLink>
                </S.LinkMask>
              ))}
              <S.LinkMask style={{ height: '30px' }}>
                <S.MenuLink
                  href="/Kemal Bora Bayraktar.pdf"
                  target="_blank"
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

            <S.GitHubOpenSource
              href="https://github.com/bora-bayraktar/portfolio"
              isMenuOpen={isMenuOpen}
              rel="noreferer, nofollow"
            >
              <S.FirstLine>This website is</S.FirstLine>
              <S.SecondLine>
                open-source on <S.GithubLogoIcon />.
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
