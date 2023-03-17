import React, { useMemo, useCallback } from 'react';
import * as S from './styles';
import colors from '@styles/colors';
import Title from '@components/title';
import { TabContext, TabList, Tab, TabContent, TabPanel } from '@components/tab';
import { experience, education, voluntary } from './info';

export default function More() {
  const renderTab = useCallback((tab) => {
    return tab.map((exp) => (
      <S.Experience key={exp.title + exp.company}>
        <S.ExperienceHeader>
          <S.ExperienceTitle>{exp.title}</S.ExperienceTitle>
          <S.ExperienceCompany>
            {' '}
            at{' '}
            <S.StyledCompanyLink href={exp.href} rel="noreferrer, nofollow">
              {exp.company}
            </S.StyledCompanyLink>
          </S.ExperienceCompany>
          <S.ExperienceDate>{exp.date}</S.ExperienceDate>
        </S.ExperienceHeader>
        <S.ExperienceDetails>
          {exp.description.map((detail) => (
            <S.ExperienceDetail key={detail}>{detail}</S.ExperienceDetail>
          ))}
        </S.ExperienceDetails>
      </S.Experience>
    ));
  }, []);

  return (
    <S.MoreSection id="more">
      <Title
        firstLine="M"
        secondLine="ORE"
        color={colors.black}
        dotColor={colors.orange}
        justify="flex-end"
      />
      <S.StyledSubtitle first={'More about'} second={'my'} third={'carrier.'} />
      <TabContext>
        <TabList>
          <Tab>
            <S.ExperienceIcon />
            <S.StyledSpan>Experience</S.StyledSpan>
          </Tab>
          <Tab>
            <S.EducationIcon />
            <S.StyledSpan>Education</S.StyledSpan>
          </Tab>
          <Tab>
            <S.VolunteerExperienceIcon />
            <S.StyledSpan>Valuntary Experience</S.StyledSpan>
          </Tab>
        </TabList>
        <TabContent>
          <TabPanel>
            <S.ExperienceContainer>{renderTab(experience)}</S.ExperienceContainer>
          </TabPanel>
          <TabPanel>
            <S.ExperienceContainer>{renderTab(education)}</S.ExperienceContainer>
          </TabPanel>
          <TabPanel>
            <S.ExperienceContainer>{renderTab(voluntary)}</S.ExperienceContainer>
          </TabPanel>
        </TabContent>
      </TabContext>
    </S.MoreSection>
  );
}
