import React from 'react';
import ProjectScreen from '../src/components/screens/ProjectPage';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import projects from '../projects.json';

function ProjectPage({ card }) {
  return (
    <ProjectScreen
      project={card}
    />
  );
}

ProjectPage.propTypes = ProjectScreen.propTypes;

export default websitePageHOC(ProjectPage);

export async function getStaticProps({ params }) {
  const projectsArray = projects.projects;
  const dadosDaPagina = projectsArray.reduce((valorAcumulado, eachProject) => {
    const foundProject = eachProject.slug === params.slug;

    if (foundProject) {
      return {
        ...valorAcumulado,
        card: eachProject,
      };
    }

    return valorAcumulado;
  }, {});

  return {
    props: {
      card: dadosDaPagina.card,
      pageWrapperProps: {
        seoProps: {
          headTitle: dadosDaPagina.card.title,
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const projectsArray = projects.projects;
  const paths = projectsArray.reduce((valorAcumulado, eachProject) => {
    const projectSlug = eachProject.slug;
    // return { params: { slug: projectSlug } };

    return [
      ...valorAcumulado,
      { params: { slug: projectSlug } },
    ];
  }, []);

  return {
    paths,
    fallback: false,
  };
}

// export async function getStaticPaths() {
//   const projectsArray = projects.projects;
//   const paths = projectsArray.reduce((valorAcumulado, eachProject) => {
//     const projectSlugs = eachProject.map((proj) => {
//       const projectSlug = proj.slug;
//       return { params: { slug: projectSlug } };
//     });

//     return [
//       ...valorAcumulado,
//       ...projectSlugs,
//     ];
//   }, []);

//   return {
//     paths,
//     fallback: false,
//   };
// }
