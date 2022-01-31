import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'react-bootstrap';

function titleToId (title) {
  if (typeof (title) === 'string') {
    return title
      .trim()
      .replace(/[^0-9a-zA-Z ]/gi, '')
      .replace(/[ ]+/gi, '-')
      .toLowerCase();
  }
}

const Section = (props) => {
  const sectionId = props.id || titleToId(props.title); // Can be undefined
  const sectionStyle = {
    backgroundColor: props.bgColor,
    color: props.color
  };

  // Add a scroll margin so sections won't hide under the sticky page header
  const stickyHeader = document.querySelector('header');
  sectionStyle.scrollMarginTop = ((stickyHeader && stickyHeader.offsetHeight) || props.defaultScrollMargin) + 'px';

  let heading;
  if (props.title) {
    heading = (
      <h1 className={'my-0 text-' + props.titleAlign}>
        {props.title}
        <hr className='mt-1 mb-2' />
      </h1>
    );
  }

  return (
    <section id={sectionId} className='pt-4 pb-5' style={sectionStyle}>
      <Container>
        {heading}
        {props.children}
      </Container>
    </section>
  );
};

Section.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  defaultScrollMargin: PropTypes.number,
  id: PropTypes.string,
  title: PropTypes.string,
  titleAlign: PropTypes.string
};

Section.defaultProps = {
  bgColor: 'var(--bs-light)',
  color: 'var(--bs-dark)',
  defaultScrollMargin: 80,
  titleAlign: 'center'
};

export default Section;
