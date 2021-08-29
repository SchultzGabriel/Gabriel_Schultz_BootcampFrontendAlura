import React from 'react';
// import PropTypes from 'prop-types';
import NavWrapper from './style/NavWrapper';
import Link from '../../foundation/link';
// import Button from '../commons/Button';

// eslint-disable-next-line react/prop-types
export default function Nav() {
  return (
    <NavWrapper>
      <NavWrapper.Anchor><Link href="/">início</Link></NavWrapper.Anchor>
      <NavWrapper.Anchor><Link href="/sobre"> sobre </Link></NavWrapper.Anchor>
    </NavWrapper>
  );
}

// Nav.defaultProps = {
//   onclick: 'true',
// };

// Nav.propTypes = {
//   onclick: PropTypes.bool,
// }
