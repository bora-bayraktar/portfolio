import styled from 'styled-components';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';

export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const GithubIcon = styled(FaGithub)``;

export const LinkedinIcon = styled(FaLinkedin)``;

export const InstagramIcon = styled(FaInstagram)``;

export const EmailIcon = styled(FaEnvelope)``;
