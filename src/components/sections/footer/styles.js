import styled from 'styled-components';
import colors from '@styles/colors';
import screens from '@styles/screens';
import Title from '@components/title';
import Subtitle from '@components/subtitle';
import SocialIcons from '@components/social-icons';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';

export const StyledFooter = styled.footer`
  background-color: ${colors.black};
  padding: 3rem 10rem;

  @media ${screens.small} {
    padding: 3rem 4rem;
  }
`;

export const StyledTitle = styled(Title)`
  font-size: 3.2rem;
`;

export const StyledSubtitle = styled(Subtitle)`
  color: ${colors.white};
  font-size: 2rem;

  span {
    font-size: 2.5rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media ${screens.small} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StyledEmailContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledEmailIcon = styled(FaEnvelope)`
  color: ${colors.white};
  font-size: 2rem;
  margin-right: 2rem;
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledHeader = styled.p`
  color: ${colors.orange};
  font-size: 1.6rem;
  font-weight: 800;

  @media ${screens.small} {
    font-size: 1.6rem;
  }
`;

export const StyledEmailText = styled.a`
  color: ${colors.white};
  font-weight: 600;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${colors.orange};
  }
`;

export const StyledHorizontalLine = styled.hr`
  border: 0.1px solid ${colors.darkGrey};
  opacity: 0.4;
  margin: 0 -3rem 1.5rem -3rem;
`;

export const StyledSocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export const StyledSocialIcons = styled(SocialIcons)`
  max-width: 13rem;

  svg {
    color: ${colors.darkGrey};
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }
`;

export const StyledCopyRightText = styled.p`
  color: ${colors.darkGrey};
  opacity: 0.6;
`;

export const GithubOpenSource = styled.div`
  display: flex;
  align-items: center;
`;

export const GithubIcon = styled(FaGithub)`
  color: ${colors.white};
  font-size: 2rem;
  margin-right: 2rem;

  &:hover {
    color: ${colors.white};
  }
`;

export const StyledLink = styled.a`
  color: ${colors.white} !important;
  font-weight: 600;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${colors.orange} !important;
  }
`;

export const StyledGithubEmailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  margin: 3rem 0;

  @media ${screens.small}, ${screens.medium} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
