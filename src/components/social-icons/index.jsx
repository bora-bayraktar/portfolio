import React from 'react';
import * as S from './styles';

import { GithubIcon, LinkedinIcon, EmailIcon, InstagramIcon } from '../icons';

export default function SocialIcons({ className, iconSize = 20 }) {
  const icons = [
    { href: '/', icon: <GithubIcon size={iconSize} /> },
    { href: '/', icon: <LinkedinIcon size={iconSize} /> },
    { href: '/', icon: <EmailIcon size={iconSize} /> },
    { href: '/', icon: <InstagramIcon size={iconSize} /> },
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
