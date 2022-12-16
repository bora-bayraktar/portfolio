import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

const transition = 'all 0.4s cubic-bezier(1, 0, 0, 1)';

export const Link = styled.a`
  position: relative;

  &:before {
    content: '';
    width: 0%;
    height: 40%;
    display: block;
    position: absolute;
    top: 50%;
    left: -5px;
    transform: translateY(-50%);
    background-color: ${colors.orange};
    opacity: 0.4;
    transition: ${transition};
  }

  &:hover:before {
    width: calc(100% + 10px);
  }

  ${(props) => props.underlined && afterPseudoElement}
`;

const afterPseudoElement = css`
  &:after {
    content: '';
    width: 100%;
    height: 2px;
    display: block;
    position: absolute;
    bottom: -3px;
    right: 0;
    background-color: ${colors.black};
    transition: ${transition};
  }

  &:hover:after {
    width: 0;
  }
`;
