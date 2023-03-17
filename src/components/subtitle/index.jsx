import React from 'react';
import * as S from './styles';

export default function Subtitle({ first, second, third, className }) {
  return (
    <S.Subtitle className={className}>
      {first}
      <S.SubtitleSpan> {second} </S.SubtitleSpan>
      {third}
    </S.Subtitle>
  );
}
