import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './Navigation';

const Header = ({ children }) => {
  return (
    <header className='sticky-sm-top'>
      <Navigation />
      {children}
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node
};

export default Header;
