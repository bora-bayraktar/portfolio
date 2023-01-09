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
        })
      ),
    [value]
  );

  return <S.StyledTabList>{childrenWithProps}</S.StyledTabList>;
}
