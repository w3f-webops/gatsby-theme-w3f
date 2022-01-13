import React from 'react';

import Nav from './Nav';
import SelectLanguage from './SelectLanguage';

const Header = () => {
  return (
    <header>
      <Nav />
      <nav>
        <SelectLanguage />
      </nav>
    </header>
  );
};

export default Header;
