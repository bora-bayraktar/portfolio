import styled from 'styled-components';
import screens from '@styles/screens';
import colors from '@styles/colors';
import { BsSearch } from '@react-icons/all-files/bs/BsSearch';

export const StyledTabListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: rgba(28, 27, 32, 0.95);
  border-radius: 1rem 0 0 1rem;
  padding: 3rem;

  @media ${screens.small}, ${screens.medium} {
    width: 100%;
    border-radius: 1rem 1rem 0 0;
    padding: 1.5rem;
  }
`;

export const StyledDotSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${screens.small}, ${screens.medium} {
    margin-bottom: 1.5rem;
  }
`;

export const StyledDots = styled.div`
  display: flex;
  justify-content: space-between;
  width: 6rem;
  margin-bottom: 3rem;

  @media ${screens.small}, ${screens.medium} {
    margin-bottom: 0;
  }
`;

export const Dot = styled.div`
  height: 1.35rem;
  width: 1.35rem;
  border-radius: 100%;
  background-color: ${({ color }) => color};
`;

export const StyledSearch = styled.div`
  border: 1px solid rgb(100, 100, 100);
  border-radius: 1rem;
  height: 2.7rem;
  width: 70%;
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  padding: 0 1.5rem;

  @media ${screens.large} {
    display: none;
  }
`;

export const StyledSearchIcon = styled(BsSearch)`
  font-size: 1.3rem;
  margin-right: 1rem;
  color: ${colors.white};
  flex-shrink: 0;
`;

export const StyledSearchValue = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const StyledTabList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  @media ${screens.small}, ${screens.medium} {
    flex-direction: row;
    justify-content: center;
  }
`;
