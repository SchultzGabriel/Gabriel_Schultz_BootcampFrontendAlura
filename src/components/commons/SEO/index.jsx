import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export default function SEO({ headTitle }) {
  const hasHeadTitle = Boolean(headTitle);
  const baseTitle = 'Gabriel Schultz - Portfólio';
  const title = hasHeadTitle
    ? (`${headTitle} | ${baseTitle}`)
    : baseTitle;

  const description = 'Apresento meu portfólio, onde você pode encontrar informações sobre meu trabalho, skills e localização.';

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://gabriel-schultz-portfolio-online.vercel.app/" />
      <meta property="og:title" content="Home | Gabriel Schultz - Portfólio" />
      <meta property="og:description" content="Apresento meu portfólio, onde você pode encontrar informações sobre meu trabalho, skills e localização." />
      <meta property="og:image" content="https://i.imgur.com/kIZjmVf.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://gabriel-schultz-portfolio-online.vercel.app/" />
      <meta property="twitter:title" content="Home | Gabriel Schultz - Portfólio" />
      <meta property="twitter:description" content="Apresento meu portfólio, onde você pode encontrar informações sobre meu trabalho, skills e localização." />
      <meta property="twitter:image" content="https://i.imgur.com/kIZjmVf.png" />
    </Head>
  );
}

SEO.defaultProps = {
  headTitle: '',
};

SEO.propTypes = {
  headTitle: PropTypes.string,
};
