import React from 'react';
import HeaderWrapper from './style/HeaderWrapper';
import Nav from '../Nav';
import Logo from '../../theme/Logo';

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav />
    </HeaderWrapper>
  );
}
