import React from 'react';
import ContButton from './style';

// eslint-disable-next-line react/prop-types
export default function ContactButton({ onClick, isModalOpen }) {
  return (
    <ContButton type="button" onClick={() => onClick()}>
      <img src="/images/contact.png" alt="" />
      {!isModalOpen && <img src="/images/left.png" alt="" />}
      {isModalOpen && <img src="/images/right.png" alt="" />}
    </ContButton>

  );
}
