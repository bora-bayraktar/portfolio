import React, { useState, useCallback, useMemo } from 'react';
import * as S from './styles';

export default function TabContext({ children }) {
  const [TabList, TabContent] = children;
  const [value, setValue] = useState(0);

  const handleChange = useCallback((value) => setValue(value), []);

  const TabListWithProps = useMemo(
    () => React.cloneElement(TabList, { value, handleChange }),
    [value, handleChange]
  );
  const TabContentWithProps = useMemo(() => React.cloneElement(TabContent, { value }), [value]);

  return (
    <S.StyledTabContextContainer>
      {TabListWithProps}
      {TabContentWithProps}
    </S.StyledTabContextContainer>
  );
}
