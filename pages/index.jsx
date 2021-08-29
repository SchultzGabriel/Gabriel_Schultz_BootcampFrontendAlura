import React from 'react';
import Cover from '../src/components/Cover';
import Projects from '../src/components/Projects';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function Home() {
  return (
    <>
      <Cover />
      <Projects />
    </>
  );
}

export default websitePageHOC(Home, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
  },
});
