import React from 'react';
import * as S from './styles';
import colors from '@styles/colors';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <S.StyledFooter id="contact">
      <S.TitleContainer>
        <S.StyledTitle
          firstLine="CON"
          secondLine="TACT"
          color={colors.white}
          dotColor={colors.orange}
        />
        <S.StyledSubtitle first="Feel" second="free" third="to contact me." />
      </S.TitleContainer>

      <S.StyledGithubEmailContainer>
        <S.StyledEmailContainer>
          <S.StyledEmailIcon />
          <S.StyledInfo>
            <S.StyledHeader>Email</S.StyledHeader>
            <S.StyledEmailText
              href="mailto:kemalborabayraktar@gmail.com"
              rel="norefferer, nofollow"
            >
              kemalborabayraktar@gmail.com
            </S.StyledEmailText>
          </S.StyledInfo>
        </S.StyledEmailContainer>

        <S.GithubOpenSource>
          <S.GithubIcon />
          <S.StyledInfo>
            <S.StyledHeader>GitHub</S.StyledHeader>
            <S.StyledLink
              href="https://github.com/bora-bayraktar/portfolio"
              rel="norefferer, nofollow"
            >
              This website is open-source on GitHub.
            </S.StyledLink>
          </S.StyledInfo>
        </S.GithubOpenSource>
      </S.StyledGithubEmailContainer>

      <S.StyledHorizontalLine />

      <S.StyledSocialMediaContainer>
        <S.StyledCopyRightText>© {year} Kemal Bora Bayraktar</S.StyledCopyRightText>
        <S.StyledSocialIcons />
      </S.StyledSocialMediaContainer>
    </S.StyledFooter>
  );
}
