import React from 'react';
import * as S from './styles';

export default function TabPanel({ children, active }) {
  return <S.StyledTabPanel active={active}>{children}</S.StyledTabPanel>;
}
