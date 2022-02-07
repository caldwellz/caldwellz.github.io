import React from 'react';
import PropTypes from 'prop-types';

const currentYear = new Date().getFullYear();

const Footer = ({ bg, color }) => {
  return (
    <footer className={'text-center bg-' + bg + ' text-' + color}>
      Copyright &copy; {currentYear} Zach Caldwell
    </footer>
  );
};

Footer.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string
};

Footer.defaultProps = {
  bg: 'dark',
  color: 'light'
};

export default Footer;
