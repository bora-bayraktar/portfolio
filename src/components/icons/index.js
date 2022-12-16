import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { CgMenuRight } from '@react-icons/all-files/cg/CgMenuRight';
import { IoClose } from '@react-icons/all-files/io5/IoClose';
import { GoLogoGithub } from '@react-icons/all-files/go/GoLogoGithub';

const StyledIcon = css`
  color: ${colors.black};
  transition: all 0.2s ease-in-out;

  @media (hover: hover) {
    &:hover {
      color: ${colors.orange};
    }
  }
`;

export const MenuIcon = styled(CgMenuRight)`
  ${StyledIcon}
`;

export const CloseMenuIcon = styled(IoClose)`
  ${StyledIcon}
`;

export const GithubIcon = styled(FaGithub)`
  ${StyledIcon}
`;

export const LinkedinIcon = styled(FaLinkedin)`
  ${StyledIcon}
`;

export const InstagramIcon = styled(FaInstagram)`
  ${StyledIcon}
`;

export const EmailIcon = styled(FaEnvelope)`
  ${StyledIcon}
`;

export const GithubLogoIcon = styled(GoLogoGithub)`
  ${StyledIcon}
  font-size: 2.5rem;
`;
