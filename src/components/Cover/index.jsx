import React from 'react';
import Text from '../foundation/text';
import Box from '../foundation/layout/Box';

export default function Cover() {
  return (
    <Box
      backgroundImage="url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9aaaf7a6-b1a5-40a3-8eb8-02712a91a568/dcyp8zl-e675430f-2807-4d7f-b4bd-acaf945ec0a9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlhYWFmN2E2LWIxYTUtNDBhMy04ZWI4LTAyNzEyYTkxYTU2OFwvZGN5cDh6bC1lNjc1NDMwZi0yODA3LTRkN2YtYjRiZC1hY2FmOTQ1ZWMwYTkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LQXDkZsOdq9kCEB55QYXnfeplFcHyoqeWxHA_C2S7ik')"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100vh"
    >
      <Text
        variant="title"
        tag="h2"
        color="tertiary.light"
        textAlign={{
          xs: 'center',
          md: 'center',
        }}
        textShadow="
        0 0 20px #fff,
        0 0 40px #0ff,
        0 0 80px #0ff,
        0 0 90px #0ff,
        0 0 100px #0ff,
        0 0 150px #0ff;"
      >
        GABRIEL SCHULTZ
      </Text>
      <Text
        variant="title"
        tag="h2"
        color="secondary.light"
        textAlign={{
          xs: 'center',
          md: 'center',
        }}
        textShadow="
        0 0 20px #fff,
        0 0 40px #0ff,
        0 0 80px #0ff,
        0 0 90px #0ff,
        0 0 100px #0ff,
        0 0 150px #0ff;"
      >
        MEU PORTFÓLIO
      </Text>
    </Box>
  );
}
