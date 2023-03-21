import React from 'react';
import * as S from './styles';
import colors from '@styles/colors';
import Title from '@components/title';
import Subtitle from '@components/subtitle';

export default function About() {
  return (
    <S.AboutSection id="about">
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
              I'm Bora. I study Computer Science and Economics at Koç University and Computer
              Science at Technische Universität Berlin. Besides my studies, I also work as a
              Software Engineer. I try to improve my programming skills and knowledge by researching
              and learning in my free time.
            </S.StyledParagraph>
          </S.SubtitleParagraphContainer>

          <S.InfoWrapper>
            {infos.map((info) => (
              <S.Info key={info.name}>
                <S.InfoName>{info.name}:</S.InfoName>
                <S.InfoContent
                  href={info.href ? info.href : null}
                  rel={info.href ? 'norefferer, nofollow' : null}
                >
                  {info.info}
                </S.InfoContent>
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
