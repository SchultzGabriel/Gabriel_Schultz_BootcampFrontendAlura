import React from 'react';
import Text from '../foundation/text';
import Box from '../foundation/layout/Box';

export default function Cover() {
  return (
    <Box
      backgroundImage="url(/images/cover.jpg)"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
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
    </Box>
  );
}
