import React from 'react';
import styled, { css } from 'styled-components';
import Text from '../../components/foundation/text';
import breakpointsMedia from '../utils/breakpointMedia';

const LogoWrapper = styled.div`
  display:flex;

${breakpointsMedia({
    sm: css`
    flex-wrap:wrap;
    `,
    md: css`
    width:100vw;
    justify-content:center;
    `,
  })};
`;

export default function Logo() {
  return (
    <LogoWrapper>
      <Text tag="span" variant="title" color="primary.main" textShadow="2px 2px 2px pink">
        Gabriel_
      </Text>
      <Text tag="span" variant="title" color="primary.main" textShadow="2px 2px 2px pink">
        Schultz
      </Text>
    </LogoWrapper>
  );
}
