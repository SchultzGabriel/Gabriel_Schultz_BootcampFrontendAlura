import React from 'react';
// import PropTypes from 'prop-types';
import NavWrapper from './style/NavWrapper';
import Link from '../foundation/link';
// import Button from '../commons/Button';

// eslint-disable-next-line react/prop-types
export default function Nav({ onClick, isModalOpen }) {
  return (
    <NavWrapper>
      <NavWrapper.Anchor><Link href="/">início</Link></NavWrapper.Anchor>
      <NavWrapper.Anchor><Link href="/sobre"> sobre </Link></NavWrapper.Anchor>
      <NavWrapper.Contact type="button" onClick={() => onClick()}>
        {isModalOpen && <img src="/images/right.png" alt="" />}
        {!isModalOpen && <img src="/images/left.png" alt="" />}
        <img src="/images/contact.png" alt="" />
      </NavWrapper.Contact>
    </NavWrapper>
  );
}

// Nav.defaultProps = {
//   onclick: 'true',
// };

// Nav.propTypes = {
//   onclick: PropTypes.bool,
// }
