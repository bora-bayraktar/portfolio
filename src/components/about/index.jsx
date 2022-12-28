import React from 'react';
import * as S from './styles';
import colors from '../../styles/colors';

import Title from '../title';
import Subtitle from '../subtitle';

export default function About() {
  return (
    <S.AboutSection>
      <Title
        firstLine="AB"
        secondLine="OUT"
        color={colors.orange}
        dotColor={colors.black}
        justify="flex-start"
      />
      <S.AboutInfoContainer>
        <S.LeftContainer>
          <S.SubtitleParagraphContainer>
            <Subtitle first="Let" second="me" third="introduce myself." />
            <S.StyledParagraph>
              I'm Bora. I study Computer Science and Economics at Koç University. Besides my
              studies, I spare time for my social life. I try to improve my programming skills and
              knowledge by researching and learning in my free time.
            </S.StyledParagraph>
          </S.SubtitleParagraphContainer>

          <S.InfoWrapper>
            {infos.map((info) => (
              <S.Info key={info.name}>
                <S.InfoName>{info.name}:</S.InfoName>
                <S.InfoContent href={info.href ? info.href : null}>{info.info}</S.InfoContent>
              </S.Info>
            ))}
          </S.InfoWrapper>
        </S.LeftContainer>

        <S.SkillsContainer>
          {skills.map((skill) => (
            <S.SkillUl key={skill.name}>
              <S.SkillLiHeader>{skill.name}</S.SkillLiHeader>
              {skill.skills.map((skill) => (
                <S.SkillLi key={skill}>{skill}</S.SkillLi>
              ))}
            </S.SkillUl>
          ))}
        </S.SkillsContainer>
      </S.AboutInfoContainer>
    </S.AboutSection>
  );
}

const infos = [
  {
    name: 'Fullname',
    info: 'Kemal Bora Bayraktar',
  },
  {
    name: 'Location',
    info: 'Istanbul - Berlin',
  },
  {
    name: 'GitHub',
    info: 'github.com/bora-bayraktar',
    href: 'https://github.com/bora-bayraktar',
  },
  {
    name: 'Email',
    info: 'kemalborabayraktar@gmail.com',
    href: 'mailto:kemalborabayraktar@gmail.com',
  },
];

const skills = [
  {
    name: 'Programming',
    skills: ['Java', 'Python', 'C, C++', 'Javascript, HTML, CSS'],
  },
  {
    name: 'Tools',
    skills: ['React, Bootsrap', 'Git', 'Microsoft Office'],
  },
  {
    name: 'Languages',
    skills: ['English', 'German', 'Turkish'],
  },
  {
    name: 'Interests',
    skills: ['Voleboll', 'Football', 'Basketball'],
  },
];
