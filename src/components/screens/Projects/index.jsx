import React from 'react';
import ProjectWrapper from './style/ProjectsWrapper';
import Text from '../../foundation/text';
import Box from '../../foundation/layout/Box';
import Link from '../../foundation/link';
import projects from '../../../../projects.json';

export default function Cover() {
  const [previewState, setPreviewState] = React.useState({ image: 'https://i.imgur.com/8abs8Gx.png' });
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
      <ProjectWrapper.Preview>
        <Link
          href={`/${previewState.slug}`}
          className="link"
        >
          <img className="preview" src={previewState.image} alt="" />
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
            {previewState.description}
          </Text>
        </Link>
      </ProjectWrapper.Preview>
      <div className="projects">
        {projects.projects.map((item) => (
          <ProjectWrapper.Card
            key={item.link}
            onMouseEnter={() => setPreviewState(item)}
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
