import styled, { css } from 'styled-components';
import screens from '@styles/screens';
import Subtitle from '@components/subtitle';
import { MdWork } from '@react-icons/all-files/md/MdWork';
import { IoIosSchool } from '@react-icons/all-files/io/IoIosSchool';
import { RiUserHeartFill } from '@react-icons/all-files/ri/RiUserHeartFill';

export const MoreSection = styled.section`
  padding-bottom: 10rem;

  @media ${screens.small} {
    padding-bottom: 4rem 0;
  }
`;

export const StyledSubtitle = styled(Subtitle)`
  margin: 2.5rem 0;
`;

const iconStyles = css`
  margin: 0 1rem;

  @media ${screens.small}, ${screens.medium} {
    display: none;
  } ;
`;

export const ExperienceIcon = styled(MdWork)`
  ${iconStyles}
`;

export const EducationIcon = styled(IoIosSchool)`
  ${iconStyles}
  font-size: 2rem;
`;

export const VolunteerExperienceIcon = styled(RiUserHeartFill)`
  ${iconStyles}
  font-size: 2.5rem;
`;
