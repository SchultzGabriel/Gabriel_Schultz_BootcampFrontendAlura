import React from 'react';
import CoverWrapper from './CoverWrapper';
import Text from '../foundation/text';

export default function Cover() {
  return (
    <CoverWrapper
      backgroundImage="url(/images/cover.jpg)"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
    >
      <Text
        variant="title"
        tag="p"
        color="tertiary.light"
        textAlign={{
          xs: 'center',
          md: 'center',
        }}
        textShadow="2px 2px 2px black"
      >
        MEU PORTFÓLIO
      </Text>
    </CoverWrapper>
  );
}
