import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

// Pull in main theme - Materia
import 'bootswatch/dist/materia/bootstrap.min.css';

const Layout = ({ children }) => {
  return (
    <div id='layout'>
      <Header />
      <Navigation />
      <Container>
        {children}
      </Container>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
