/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import theme from '../src/theme';
import GlobalStyle from '../src/theme/GlobalStyle';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        <title>Gabriel Schultz - Portfólio Online</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
