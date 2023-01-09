import React, { useState, useCallback } from 'react';
import GlobalStyles from '@styles/globalStyles';
import NavBar from '@components/navbar';
import Menu from '@components/menu';
import Header from '@components/sections/header';
import Main from '@components/sections/main';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  if (typeof document !== 'undefined') {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }

  return (
    <React.Fragment>
      <GlobalStyles />
      <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Header />
      <Main />
    </React.Fragment>
  );
}

export { Head } from '@components/head';
