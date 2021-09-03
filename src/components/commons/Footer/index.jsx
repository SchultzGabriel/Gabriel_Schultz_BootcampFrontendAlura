import React from 'react';
import FooterWrapper from './style/FooterWrapper';
import Link from '../../foundation/link';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterWrapper.Icon>
        <Link href="https://github.com/SchultzGabriel" target="_blank" rel="noreferrer">
          <img src="/images/github.png" alt="" />
        </Link>
      </FooterWrapper.Icon>
      <FooterWrapper.Icon>
        <Link href="https://www.linkedin.com/in/gabriel-bridi-schultz/" target="_blank" rel="noreferrer">
          <img src="/images/linkedin.png" alt="" />
        </Link>
      </FooterWrapper.Icon>
      <FooterWrapper.Icon>
        <Link href="https://www.instagram.com/bridigabriel/" target="_blank" rel="noreferrer">
          <img src="/images/instagram.png" alt="" />
        </Link>
      </FooterWrapper.Icon>
    </FooterWrapper>
  );
}
