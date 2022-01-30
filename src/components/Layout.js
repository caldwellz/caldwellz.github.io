import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

// Pull in main theme - Materia
import 'bootswatch/dist/materia/bootstrap.min.css';
import 'bootstrap';

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Header />
      <Navbar />
      <main className="container">
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
