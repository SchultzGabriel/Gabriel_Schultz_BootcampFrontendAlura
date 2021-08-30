import React from 'react';
import ProjectWrapper from './style/ProjectsWrapper';
import Text from '../foundation/text';
import Box from '../foundation/layout/Box';
import Link from '../foundation/link';
import projects from '../../../projects.json';

export default function Cover() {
  return (
    <ProjectWrapper
      // backgroundImage="url(/images/projectsBackground.jpg)"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
    >
      <Text
        variant="title"
        tag="h2"
        color="tertiary.light"
        textAlign="center"
        textShadow="2px 2px 2px black"
      >
        PROJETOS
      </Text>
      <div className="projects">
        {projects.projects.map((item) => (
          <ProjectWrapper.Card key={item.link}>
            <Link href={item.slug}>
              <img className="preview" src={item.image} alt="123" />
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Text
                  variant="titleXS"
                  tag="h3"
                  color="tertiary.light"
                  textAlign={{
                    md: 'center',
                  }}
                  textShadow="2px 2px 2px black"
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
