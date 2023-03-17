import React, { useMemo } from 'react';
import * as S from './styles';

export default function TabList({ children, handleChange, value }) {
  const childrenWithProps = useMemo(
    () =>
      children.map((child, index) =>
        React.cloneElement(child, {
          active: value === index,
          handleChange,
          length: children.length,
          index,
          key: index,
        })
      ),
    [value]
  );

  const colors = ['#ee695e', '#f6be4f', '#61c354'];

  const dots = useMemo(
    () => (
      <S.StyledDotSearchContainer>
        <S.StyledDots>
          {colors.map((color) => (
            <S.Dot key={color} color={color} />
          ))}
        </S.StyledDots>
        <S.StyledSearch>
          <S.StyledSearchIcon />
          <S.StyledSearchValue>
            {children[value].props.children[1].props.children}
          </S.StyledSearchValue>
        </S.StyledSearch>
      </S.StyledDotSearchContainer>
    ),
    [value]
  );

  return (
    <S.StyledTabListContainer>
      {dots}
      <S.StyledTabList>{childrenWithProps}</S.StyledTabList>
    </S.StyledTabListContainer>
  );
}
