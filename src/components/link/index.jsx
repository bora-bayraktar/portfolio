import React from 'react';
import * as S from './styles';

export default function Link({ underlined = true, children, ...props }) {
  return (
    <S.Link {...props} underlined={underlined}>
      {children}
    </S.Link>
  );
}
