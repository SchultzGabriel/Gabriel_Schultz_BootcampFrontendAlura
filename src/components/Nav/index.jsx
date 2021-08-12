import React from 'react';
import NavWrapper from './style/NavWrapper';

export default function Nav() {
  return (
    <NavWrapper>
      <NavWrapper.Anchor href="/">início</NavWrapper.Anchor>
      <NavWrapper.Anchor href="/sobre"> sobre </NavWrapper.Anchor>
    </NavWrapper>
  );
}
