import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const favIcon = 'images/favicon-32x32.png';
const siteTitle = "Zach's ePortfolio";

const Head = ({ title }) => {
  return (
    <Helmet
      defaultTitle={siteTitle}
      title={title}
      titleTemplate={'%s | ' + siteTitle}
    >
      <meta name='icon' href={favIcon} />
    </Helmet>
  );
};

Head.propTypes = {
  title: PropTypes.string
};

export default Head;
