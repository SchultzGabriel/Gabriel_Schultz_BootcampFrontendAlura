// import PropTypes from 'prop-types';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import NavWrapper from './style/NavWrapper';
import Button from '../Button';

const links = [
  {
    text: 'início',
    link: '/',
  },
  {
    text: 'projetos',
    link: '/projects',
  },
  {
    text: 'sobre',
    link: '/about',
  },
  {
    text: 'contato',
    link: '/contact',
  },
];

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export default function Nav({ ...open }) {
  const isMenuOpen = open.open;
  return (
    <NavWrapper open={isMenuOpen}>
      {isMenuOpen && <LockScroll />}
      {links.map((link) => (
        <Button
          href={link.link}
          variant="primaty.main"
          key={link.text}
        >
          {link.text}
        </Button>

      ))}
    </NavWrapper>
  );
}

// Nav.defaultProps = {
//   onclick: 'true',
// };

// Nav.propTypes = {
//   onclick: PropTypes.bool,
// }
