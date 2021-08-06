import React from 'react';
import Box from '../src/components/foundation/layout/Box';
import Text from '../src/components/foundation/text';

export default function Home() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="center"
      backgroundImage="url(/images/teste.png)"
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      backgroundPosition="left"
    >
      <Text
        variant="paragraph1"
        tag="p"
        // color não tá pegando
        color="tertiary.light"
        textAlign={{
          xs: 'center',
          md: 'left',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
    </Box>
  );
}
