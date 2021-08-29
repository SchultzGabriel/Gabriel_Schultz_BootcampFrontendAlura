import React from 'react';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import Erro404 from '../src/components/screens/404';

function Home() {
  return (
    <>
      <Erro404 />
    </>
  );
}

export default websitePageHOC(Home, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Erro 404',
    },
  },
});
