import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Header from './Header';
import Head from './Head';

// Pull in main theme - Materia
import 'bootswatch/dist/materia/bootstrap.min.css';

const Page = ({ title, children }) => {
  return (
    <>
      <Head title={title} />
      <div id='layout'>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Page;
