import styled from 'styled-components';
import colors from '@styles/colors';
import screens from '@styles/screens';

export const AboutSection = styled.section`
  padding: 10rem 0;

  @media ${screens.small} {
    padding: 4rem 0;
  }
`;

export const AboutInfoContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  min-height: 50rem;
  flex-direction: column;

  @media ${screens.large} {
    flex-direction: row;
    margin-top: 6rem;
  }
`;

export const SubtitleParagraphContainer = styled.div`
  @media ${screens.large} {
    margin-top: 1rem;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`;

export const InfoName = styled.p`
  color: ${colors.black};
  font-weight: 800;
  margin-right: 1rem;
`;

export const InfoContent = styled.a`
  color: ${colors.lightGrey};
  transition: 0.2s ease-in-out;

  &:visited {
    color: ${colors.lightGrey};
  }

  ${(props) => props.href && `&:hover { color: ${colors.orange}; }`}
`;

export const Info = styled.div`
  margin-top: 1.5rem;
  line-height: 1.4;
`;

export const StyledParagraph = styled.p`
  color: ${colors.lightGrey};
  line-height: 1.5;
`;

export const SkillsContainer = styled.div`
  margin-right: -10rem;
  min-width: calc(50% + 10rem);
  min-height: 40rem;
  background-color: ${colors.black};
  padding: 8rem;
  padding-right: 2rem;

  display: grid;
  grid-template-columns: 50% 50%;
  grid-row: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 40px;

  border-radius: 0.8rem 0 0 0.8rem;

  @media ${screens.small} {
    margin: 0 -4rem;
    border-radius: 0;
    padding: 4rem;
  }

  @media ${screens.medium} {
    margin: 0 -10rem;
    border-radius: 0;
    padding: 10rem;
  }
`;

export const SkillUl = styled.ul`
  list-style: none;
`;

export const SkillLi = styled.li`
  color: ${colors.darkGrey};
  line-height: 1.8;
`;

export const SkillLiHeader = styled.li`
  color: ${colors.white};
  font-weight: 900;
  margin-bottom: 1.5rem;
`;
