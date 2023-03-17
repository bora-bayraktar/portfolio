import React, { useCallback } from 'react';
import * as S from './styles';

function Tab({ children, active, handleChange, length, index }) {
  const onClick = useCallback(() => handleChange(index), [handleChange, index]);

  return (
    <S.StyledTab active={active} length={length} onClick={onClick}>
      {children}
    </S.StyledTab>
  );
}

export default React.memo(Tab);
