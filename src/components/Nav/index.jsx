import React from 'react';
import NavWrapper from './style/NavWrapper';
import Link from '../foundation/link';

export default function Nav() {
  return (
    <NavWrapper>
      <NavWrapper.Anchor><Link href="/">início</Link></NavWrapper.Anchor>
      <NavWrapper.Anchor><Link href="/sobre"> sobre </Link></NavWrapper.Anchor>
    </NavWrapper>
  );
}
