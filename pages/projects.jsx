import React from 'react';
import PropTypes from 'prop-types';
import Projects, { getContent } from '../src/components/screens/Projects';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function ProjectsPage({ projects }) {
  return (
    <>
      <Projects projects={projects} />
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

export async function getStaticProps() {
  const projects = await getContent();

  return {
    props: {
      projects,
    },
  };
}

ProjectsPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  projects: PropTypes.object.isRequired,
};
