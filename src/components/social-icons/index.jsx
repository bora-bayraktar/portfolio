import React from 'react';
import * as S from './styles';

export default function SocialIcons({ className, iconSize = 20 }) {
  const icons = [
    { href: '/', icon: <S.GithubIcon size={iconSize} /> },
    { href: '/', icon: <S.LinkedinIcon size={iconSize} /> },
    { href: '/', icon: <S.EmailIcon size={iconSize} /> },
    { href: '/', icon: <S.InstagramIcon size={iconSize} /> },
  ];

  return (
    <S.SocialIconsContainer className={className}>
      {icons.map((icon) => (
        <a key={icon.href} href={icon.href}>
          {icon.icon}
        </a>
      ))}
    </S.SocialIconsContainer>
  );
}
