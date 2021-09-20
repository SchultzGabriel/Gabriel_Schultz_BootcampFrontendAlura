import React from 'react';
import IndexWrapper from './style/IndexWrapper';
import Text from '../../foundation/text';
// import Link from '../../foundation/link';
import Box from '../../foundation/layout/Box';

export default function Index() {
  return (
    <IndexWrapper>
      <IndexWrapper.TextArea>
        <Box>
          <Text
            variant="coverTitle"
            tag="h1"
            color="primary.main"
            textAlign={{
              md: 'center',
            }}
            textShadow="2px 2px 2px black"
            margin="0"
          >
            Gabriel Schultz
          </Text>
          <Text
            variant="subTitle"
            tag="h3"
            color="secondary.main"
            textAlign={{
              md: 'center',
            }}
            textShadow="2px 2px 2px black"
          >
            Desenvolvedor front-end
          </Text>
        </Box>
        <a
          href="/contact"
          className="link"
        >
          Contato
        </a>
      </IndexWrapper.TextArea>
    </IndexWrapper>
  );
}
