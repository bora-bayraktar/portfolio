import React, { useState, useCallback } from 'react';
import GlobalStyles from '@styles/globalStyles';
import NavBar from '@components/navbar';
import Menu from '@components/menu';
import Footer from '@components/sections/footer';

export default function Layout({ children }) {
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
      {children}
      <Footer />
    </React.Fragment>
  );
}
