import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../utils/breakpointMedia';
import Text from '../../components/foundation/text';

const LogoWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  width:100%;


  img{
    width:60px;
  }

  span{
    flex-shrink:0;
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
      <Text
        variant="subTitle"
        tag="span"
        color="secondary.main"
        textAlign={{
          fk: 'center',
        }}
        margin="5px"
        textShadow="2px 3px 1px black"
      >
        Gabriel
      </Text>
      <Text
        variant="smallestException"
        tag="span"
        color="secondary.main"
        textAlign={{
          fk: 'center',
        }}
      >
        web developer
      </Text>
    </LogoWrapper>
  );
}
