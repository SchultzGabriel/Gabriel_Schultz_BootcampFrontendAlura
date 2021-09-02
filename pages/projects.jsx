import React from 'react';
import Projects from '../src/components/Projects';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function ProjectsPage() {
  return (
    <>
      <Projects />
    </>
  );
}

export default websitePageHOC(ProjectsPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Projetos',
    },
  },
});
