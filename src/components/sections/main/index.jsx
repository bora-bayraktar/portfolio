import React from 'react';
import * as S from './styles';

import About from './about';
import More from './more';

function Main() {
  return (
    <S.Main>
      <About />
      <More />
    </S.Main>
  );
}

export default React.memo(Main);
