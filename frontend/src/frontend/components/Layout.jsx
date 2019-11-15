import React from 'react';
import Header from './Header/Header';
import Footer from './Footer';
import Header2 from './Header/Header2';

const Layout = ({ children }) => (
  <div className="Main">
    <Header />
    {/* <Header2 /> */}
    {children}
    <Footer />
  </div>
);

export default Layout;
