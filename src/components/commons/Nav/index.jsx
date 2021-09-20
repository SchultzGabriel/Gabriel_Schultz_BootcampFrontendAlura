// import PropTypes from 'prop-types';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import NavWrapper from './style/NavWrapper';
import Link from '../../foundation/link';

const links = [
  {
    text: 'Início',
    link: '/',
  },
  {
    text: 'Projetos',
    link: '/projects',
  },
  {
    text: 'Sobre',
    link: '/about',
  },
  {
    text: 'Contato',
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
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <Link
              href={link.link}
              variant="primaty.main"
              nav
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </NavWrapper>
  );
}
