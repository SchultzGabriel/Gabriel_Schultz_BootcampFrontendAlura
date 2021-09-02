import React from 'react';
import PropTypes from 'prop-types';
import HamburgerMenu from 'react-hamburger-menu';
import HeaderWrapper from './style/HeaderWrapper';
import Logo from '../../../theme/Logo';

export default function Header({ children, onClick, open }) {
  return (
    <HeaderWrapper>
      <Logo />
      {children}
      <HamburgerMenu
        isOpen={open}
        menuClicked={onClick}
        width={40}
        height={30}
        strokeWidth={1}
        rotate={0}
        color="white"
        borderRadius={0}
        animationDuration={0.2}
      />

      {/* <Button
        variant="tertiary.main"
        onClick={onClick}
        zIndex="10"
        mobile
      >
        {open && <h1>x</h1>}
        {!open && <h1>=</h1>}

      </Button> */}
    </HeaderWrapper>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
