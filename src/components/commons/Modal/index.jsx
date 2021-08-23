/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointMedia';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: .3s;
  overflow: auto;
  overflow-y: hidden;
  z-index: 4;

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}

  ${breakpointsMedia({
    xs: css`
    `,
    md: css`
    background: rgba(0,0,0,0.9);
    overflow:scroll;
    `,
  })};
`;

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export default function Modal({ isOpen, children, onClose }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
        // isOpen = false;
        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      {isOpen && <LockScroll />}

      <motion.div
        variants={{
          open: {
            x: 0,
          },
          closed: {
            x: '100%',
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.5,
        }}
        style={{
          display: 'flex',
          flex: 1,
        }}
      >
        {children({
          'data-modal-safe-area': 'true',
        })}
      </motion.div>

    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
