import React from 'react';
import FooterWrapper from './style/FooterWrapper';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterWrapper.Icons>
        <a href="https://github.com/SchultzGabriel" target="_blank" rel="noreferrer">
          <img src="/images/github.png" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/gabriel-bridi-schultz/" target="_blank" rel="noreferrer">
          <img src="/images/linkedin.png" alt="" />
        </a>
        <a href="https://www.instagram.com/bridigabriel/" target="_blank" rel="noreferrer">
          <img src="/images/instagram.png" alt="" />
        </a>
      </FooterWrapper.Icons>
    </FooterWrapper>
  );
}
