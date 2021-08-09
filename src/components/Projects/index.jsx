import React from 'react';
import ProjectWrapper from './ProjectsWrapper';
import Text from '../foundation/text';

const projects = [
  {
    name: 'Instalura',
    description: 'Em desenvolvimento durante o bootcamp de frontend avançado da Alura.',
    image: 'https://i.imgur.com/OuW7vVT.png',
    link: 'https://github.com/SchultzGabriel/instalura',
  },
  {
    name: 'Alurawiki',
    description: 'Desenvolvido durante a Imersão React, ainda resolvendo alguns bugs.',
    image: 'https://i.imgur.com/2WDbNZ0.png',
    link: 'https://github.com/SchultzGabriel/alurawiki',
  },
  {
    name: 'Aluradev',
    description: 'Feito durante o challenge de frontend da Alura, não ficou 100% funcional e agora estou reconstruindo em ReactJS.',
    image: 'https://i.imgur.com/zr22NV7.png',
    link: 'https://github.com/SchultzGabriel/aluradev',
  },
];

export default function Cover() {
  return (
    <ProjectWrapper
      backgroundImage="url(/images/projectsBackground.jpg)"
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
        {projects.map((item) => (
          <ProjectWrapper.Card key={item.link}>
            <a href={item.link} rel="noreferrer" target="_blank">
              <img className="preview" src={item.image} alt="123" />
              <Text
                variant="titleXS"
                tag="h3"
                color="tertiary.light"
                textAlign={{
                  md: 'center',
                }}
                textShadow="2px 2px 2px black"
              >
                {item.name}
              </Text>
              <Text
                variant="paragraph2"
                tag="p"
                color="tertiary.light"
                textAlign={{
                  md: 'center',
                }}
                textShadow="2px 2px 2px black"
              >
                {item.description}
              </Text>
            </a>
          </ProjectWrapper.Card>
        ))}
      </div>
    </ProjectWrapper>
  );
}
