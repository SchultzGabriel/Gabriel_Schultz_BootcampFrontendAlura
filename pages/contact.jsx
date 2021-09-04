import React from 'react';
import ContactPage from '../src/components/screens/ContactPage';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function Home() {
  return (
    <>
      <ContactPage />
    </>
  );
}

export default websitePageHOC(Home, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Contato',
    },
  },
});
