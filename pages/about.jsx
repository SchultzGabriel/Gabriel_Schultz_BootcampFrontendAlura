import React from 'react';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import AboutMe from '../src/components/screens/aboutme';

function AboutPage() {
  return (
    <AboutMe />
  );
}

export default websitePageHOC(AboutPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre',
    },
  },
});
