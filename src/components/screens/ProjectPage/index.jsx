import React from 'react';
import PropTypes from 'prop-types';
// import { useTheme } from 'styled-components';
import Grid from '../../foundation/layout/Grid';
// import Box from '../../foundation/layout/Box';
import Text from '../../foundation/text';

export default function ProjectScreen({ project }) {
  // const theme = useTheme();
  return (
    <Grid.Container
      flex="1"
      marginTop={{
        xs: '32px',
        md: '80px',
      }}
    >
      <Grid.Row
        flexDirection={{
          xs: 'column-reverse',
          md: 'row',
        }}
      >
        <Grid.Col
          offset={{ sm: 0, lg: 0 }}
          value={{ xs: 4, md: 4, lg: 12 }}
        >
          <img src={project.image} alt="" />
        </Grid.Col>

        <Grid.Col
          value={{ lg: 6 }}
          marginBottom={{
            xs: '50px',
            md: '0',
          }}
        >
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
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
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
    slug: PropTypes.string,
  }),
};
