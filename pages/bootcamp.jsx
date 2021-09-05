import React from 'react';
import BootcampCase from '../src/components/screens/BootcampPage';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function Home() {
  return (
    <>
      <BootcampCase />
    </>
  );
}

export default websitePageHOC(Home, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Case Bootcamp',
    },
  },
});
