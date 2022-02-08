import React from 'react';
import PropTypes from 'prop-types';

// Embeds an aspect ratio-sized IFrame
const AspectedFrame = (props) => {
  // Have to use --bs-aspect-ratio instead of react-bootstrap's
  // Ratio component, because that apparently caps the ratio at 100%.
  const ratioStyle = {
    '--bs-aspect-ratio': (props.ratio * 100) + '%',
    'max-width': props.maxWidth
  };

  return (
    <div style={{ height: 'auto' }}>
      {props.children}
      <div className='ratio mx-auto' style={ratioStyle}>
        <iframe title={props.title} src={props.src} />
      </div>
    </div>
  );
};

AspectedFrame.propTypes = {
  children: PropTypes.node,
  maxWidth: PropTypes.string,
  ratio: PropTypes.number,
  src: PropTypes.string,
  title: PropTypes.string
};

// Default to a U.S. letter-size document frame
AspectedFrame.defaultProps = {
  maxWidth: '820px',
  ratio: 11 / 8.5,
  title: 'Embedded document'
};

export default AspectedFrame;
