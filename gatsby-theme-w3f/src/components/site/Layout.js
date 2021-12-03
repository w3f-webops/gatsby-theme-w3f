/* import our js web-components */
import '../../web-components/index.js';

import React from 'react';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
