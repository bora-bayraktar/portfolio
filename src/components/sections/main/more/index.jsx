import React from 'react';
import * as S from './styles';
import colors from '@styles/colors';
import Title from '@components/title';
import { TabContext, TabList, Tab, TabContent, TabPanel } from '@components/tabs/tab-primary';

export default function More() {
  return (
    <S.MoreSection>
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
            Experience
          </Tab>
          <Tab>
            <S.EducationIcon />
            Education
          </Tab>
          <Tab>
            <S.VolunteerExperienceIcon />
            Voluntery Experience
          </Tab>
        </TabList>
        <TabContent>
          <TabPanel>kemal</TabPanel>
          <TabPanel>bora</TabPanel>
          <TabPanel>bayraktar</TabPanel>
        </TabContent>
      </TabContext>
    </S.MoreSection>
  );
}
