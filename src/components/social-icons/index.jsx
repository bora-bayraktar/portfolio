import React from 'react';
import * as S from './styles';

export default function SocialIcons({ className, iconSize = 20 }) {
  const icons = [
    { href: 'https://github.com/bora-bayraktar', icon: <S.GithubIcon size={iconSize} /> },
    {
      href: 'https://www.linkedin.com/in/bora-bayraktar/',
      icon: <S.LinkedinIcon size={iconSize} />,
    },
    { href: 'mailto:kemalborabayraktar@gmail.com', icon: <S.EmailIcon size={iconSize} /> },
    {
      href: 'https://www.instagram.com/bora_bayraktar/',
      icon: <S.InstagramIcon size={iconSize} />,
    },
  ];

  return (
    <S.SocialIconsContainer className={className}>
      {icons.map((icon) => (
        <a key={icon.href} href={icon.href} rel="noreferrer, nofollow">
          {icon.icon}
        </a>
      ))}
    </S.SocialIconsContainer>
  );
}
