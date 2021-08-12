import React from 'react';
import AboutWrapper from './style/AboutWrapper';
import Text from '../foundation/text';

export default function AboutMe() {
  return (
    <AboutWrapper
      backgroundImage="url(/images/aboutBackground.jpg)"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="right"
    >
      <AboutWrapper.TextArea>
        <Text
          variant="title"
          tag="h1"
          color="tertiary.light"
          textAlign={{
            md: 'center',
          }}
          margin="1rem"
          textShadow="2px 2px 2px black"
        >
          SOBRE MIM
        </Text>
        <Text
          variant="paragraph1"
          tag="p"
          color="secondary.light"
          textAlign={{
            md: 'center',
          }}
          margin="1rem"
          textShadow="2px 3px 1px black"
        >
          Moro em Porto Alegre - RS, sou professor de biologia e
          um apaixonado pelo ensino e pela ciência.
          <br />
          <br />
          Tenho como motivação ajudar a transformar a educação
          brasileira através da tecnologia. Para isso, conto com uma sede
          insaciável de cohecimento e a arte de ensinar para meus semelhantes.
        </Text>
      </AboutWrapper.TextArea>
    </AboutWrapper>
  );
}
