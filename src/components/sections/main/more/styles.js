import styled, { css } from 'styled-components';
import screens from '@styles/screens';
import colors from '@styles/colors';
import Subtitle from '@components/subtitle';
import { BsBriefcase } from '@react-icons/all-files/bs/BsBriefcase';
import { BsBook } from '@react-icons/all-files/bs/BsBook';
import { BsCompass } from '@react-icons/all-files/bs/BsCompass';
import Link from '@components/link';

export const MoreSection = styled.section`
  padding-bottom: 10rem;

  @media ${screens.small} {
    padding-bottom: 4rem 0;
  }
`;

export const StyledSubtitle = styled(Subtitle)`
  margin: 2.5rem 0;
`;

export const StyledSpan = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const iconStyles = css`
  margin-right: 1rem;
  font-size: 1.5rem;
  flex-shrink: 0;

  @media ${screens.small}, ${screens.medium} {
    display: none;
  }
`;

export const ExperienceIcon = styled(BsBriefcase)`
  ${iconStyles}
`;

export const EducationIcon = styled(BsBook)`
  ${iconStyles}
`;

export const VolunteerExperienceIcon = styled(BsCompass)`
  ${iconStyles}
`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
  max-height: 100%;
`;

export const Experience = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExperienceHeader = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const ExperienceCompany = styled.span`
  display: inline;
  color: ${colors.orange};
`;

export const ExperienceTitle = styled.span`
  color: ${colors.white};
`;

export const StyledCompanyLink = styled.a`
  display: inline;
  color: ${colors.white} !important;
  font-weight: 700;
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${colors.orange} !important;
  }
`;

export const ExperienceDate = styled.p`
  color: ${colors.darkGrey};
  margin-top: 0.5rem;
  font-size: 1.4rem;
`;

export const ExperienceDetails = styled.ul`
  list-style: none;
  list-style-position: inside;
  display: inline-block;
`;

export const ExperienceDetail = styled.li`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  color: ${colors.darkGrey};

  &:before {
    content: '•';
    color: ${colors.orange};
    font-weight: bold;
    display: inline-block;
    width: 0.8em;
    font-size: 1.5rem;
  }
`;
