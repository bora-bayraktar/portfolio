import React from 'react';
import * as S from './styles';
import Dot from '@components/dot';

export default function Title({ firstLine, secondLine, color, dotColor, justify, className }) {
  return (
    <S.StyledTitleContainer justify={justify}>
      <S.StyledTitle className={className} color={color}>
        {firstLine}
        <br />
        {secondLine}
        <Dot color={dotColor} />
      </S.StyledTitle>
    </S.StyledTitleContainer>
  );
}
