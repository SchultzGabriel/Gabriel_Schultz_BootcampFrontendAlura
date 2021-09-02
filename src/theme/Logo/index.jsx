import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../utils/breakpointMedia';

const LogoWrapper = styled.div`
  display:flex;

  img{
    width:60px;
  }

${breakpointsMedia({
    sm: css`
    `,
    md: css`
    `,
  })};
`;

export default function Logo() {
  return (
    <LogoWrapper>
      <img src="/images/logo.png" alt="" />
    </LogoWrapper>
  );
}
