import React from 'react';
import ProjectWrapper from './style/ProjectsWrapper';
import Text from '../foundation/text';
import Box from '../foundation/layout/Box';
import Link from '../foundation/link';
import projects from '../../../projects.json';

export default function Cover() {
  const [previewState, setPreviewState] = React.useState('');
  return (
    <ProjectWrapper>
      <Text
        variant="title"
        tag="h2"
        color="tertiary.light"
        textAlign="center"
        textShadow="2px 2px 2px black"
      >
        PROJETOS
      </Text>
      <Box
        display="flex"
        width="100%"
        justifyContent="space-around"
      >
        <div className="projects">
          {projects.projects.map((item) => (
            <ProjectWrapper.Card
              key={item.link}
              onMouseEnter={() => setPreviewState(item)}
            >
              <Link href={item.slug}>
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
        <ProjectWrapper.Preview>
          <img className="preview" src={previewState.image} alt="" />
        </ProjectWrapper.Preview>
      </Box>
    </ProjectWrapper>
  );
}
