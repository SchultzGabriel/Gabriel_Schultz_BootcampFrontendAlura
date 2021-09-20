import React from 'react';
import PropTypes from 'prop-types';
// import Box from '../../foundation/layout/Box';
import Text from '../../foundation/text';
import Button from '../../commons/Button';
import ProjectWrapper from './style/ProjectWrapper';

export default function ProjectScreen({ project }) {
  // const theme = useTheme();
  return (
    <ProjectWrapper
      display="flex"
    >
      <ProjectWrapper.TextArea>
        <Text
          variant="title"
          color="tertiary.main"
        >
          {project.title}
        </Text>
        <Text
          as="p"
          variant="paragraph1"
          color="tertiary.light"
            // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
        <Button
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          variant="primaty.main"
        >
          Visite o repositório
        </Button>
      </ProjectWrapper.TextArea>
      <img src={project.image} alt="" />
    </ProjectWrapper>
  );
}

ProjectScreen.defaultProps = {
  project: 'undefined',
};

ProjectScreen.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
    slug: PropTypes.string,
  }),
};
