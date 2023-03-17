import React from 'react';
import * as S from './styles';

export default function TabPanel({ children, active, ...props }) {
  return (
    <S.StyledTabPanel active={active} {...props}>
      {children}
    </S.StyledTabPanel>
  );
}
