/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import ProjectWrapper from './style/ProjectsWrapper';
import Text from '../../foundation/text';
import Box from '../../foundation/layout/Box';
import Link from '../../foundation/link';
// import projects from '../../../../projects.json';

export { getContent } from './getContent';

export default function Cover({ projects }) {
  return (
    <ProjectWrapper>
      <Text
        variant="title"
        tag="h2"
        color="tertiary.light"
        textAlign="center"
        margin="0"
        textShadow="2px 2px 2px black"
      >
        PROJETOS
      </Text>
      <div className="projects">
        {projects.allProjetos.map((item) => (
          <ProjectWrapper.Card
            key={item.link}
            onMouseEnter={() => {}}
          >
            <Link href={`/${item.slug}`}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <img className="card__preview" src={item.image} alt="" />
                <Text
                  variant="titleXS"
                  tag="h3"
                  color="tertiary.light"
                  textAlign={{
                    md: 'center',
                  }}
                  textShadow="2px 2px 2px black"
                  className="title"
                >
                  {item.title}
                </Text>
                <Text
                  variant="paragraph2"
                  tag="p"
                  color="tertiary.light"
                  textAlign={{
                    md: 'center',
                  }}
                    // display={{
                    //   xl: 'none',
                    //   md: 'flex',
                    // }}
                  textShadow="2px 2px 2px black"
                  className="description"
                >
                  {item.description}
                </Text>
              </Box>
            </Link>
          </ProjectWrapper.Card>
        ))}
      </div>
    </ProjectWrapper>
  );
}

Cover.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  projects: PropTypes.object.isRequired,
};
