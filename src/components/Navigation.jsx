import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Nav,
  Navbar
} from 'react-bootstrap';

import {
  Github as GitHubIcon,
  Linkedin as LinkedInIcon
} from '@icons-pack/react-simple-icons';

const Navigation = (props) => {
  return (
    <Navbar bg={props.bg} variant={props.variant} expand='sm'>
      <Container>
        <Navbar.Brand className='me-2' href='#home'>
          Zach Caldwell
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto justify-content-begin'>
            <a className='m-2' href='https://github.com/caldwellz'>
              <GitHubIcon color={'var(--bs-' + props.iconVariant + ')'} size={props.iconSize} />
            </a>
            <a className='m-2' href='https://www.linkedin.com/in/zach-caldwell-ba2069127/'>
              <LinkedInIcon color={'var(--bs-' + props.iconVariant + ')'} size={props.iconSize} />
            </a>
          </Nav>
          <Nav variant='pills' className='ms-auto justify-content-end'>
            <Nav.Link href='#about-me'>About Me</Nav.Link>
            <Nav.Link href='#portfolio'>Portfolio</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Navigation.propTypes = {
  bg: PropTypes.string,
  iconSize: PropTypes.number,
  iconVariant: PropTypes.string,
  variant: PropTypes.string
};

Navigation.defaultProps = {
  bg: 'dark',
  iconSize: 18,
  iconVariant: 'light',
  variant: 'dark'
};

export default Navigation;
