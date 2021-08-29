import React from 'react';
import Box from '../../foundation/layout/Box';
import Text from '../../foundation/text';

export default function Erro404() {
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
        404
      </Text>
    </Box>

  );
}
