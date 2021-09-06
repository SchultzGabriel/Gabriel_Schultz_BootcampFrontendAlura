import React from 'react';
import { Lottie } from '@crello/react-lottie';
import Box from '../../foundation/layout/Box';
import Link from '../../foundation/link';
import errorAnimation from './animations/error.json';

export default function Erro404() {
  return (

    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100vh"
    >
      <Lottie
        width="70%"
        height="70%"
        config={{ animationData: errorAnimation, loop: true, autoplay: true }}
      />
      <Link
        href="/"
      >
        Voltar ao início!
      </Link>
    </Box>

  );
}
