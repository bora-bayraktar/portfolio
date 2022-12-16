import React from 'react';
import * as S from './styles';
import Dot from '../dot';
import colors from '../../styles/colors';
import Typical from 'react-typical';

const typicalSteps = [
  'Software Engineer.',
  500,
  'Computer Science student.',
  500,
  'Economics student.',
  500,
  'CS and Economics Double Major student.',
  500,
];

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderHelloNameDiv>
        <S.HeaderHello>
          Hello
          <Dot color={colors.orange} />
        </S.HeaderHello>
        <S.HeaderName>
          I'm Kemal Bora Bayraktar
          <Dot color={colors.orange} />
        </S.HeaderName>
        <S.StyledTypical>
          I'm <Typical loop={Infinity} wrapper="b" steps={typicalSteps} />
        </S.StyledTypical>
      </S.HeaderHelloNameDiv>
    </S.HeaderContainer>
  );
}
