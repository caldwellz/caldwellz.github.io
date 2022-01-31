import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Header from './Header';

// Pull in main theme - Materia
import 'bootswatch/dist/materia/bootstrap.min.css';

const Layout = ({ children }) => {
  return (
    <div id='layout'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
