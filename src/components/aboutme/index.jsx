/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import PropTypes from 'prop-types';
import AboutWrapper from './style/AboutWrapper';
import Text from '../foundation/text';

export default function AboutMe(repos) {
  return (
    <AboutWrapper
      // backgroundImage="url(/images/aboutBackground.jpg)"
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
        <Text
          variant="subTitle"
          tag="p"
          color="tertiary.light"
          textAlign={{
            md: 'center',
          }}
          margin="1rem"
          textShadow="2px 3px 1px black"
        >
          Meus repositórios:
        </Text>
        <AboutWrapper.RepoList>
          {repos.repos.map((itemAtual) => (
            <li key={itemAtual.id}>
              <a target="_blank" href={itemAtual.html_url} rel="noreferrer">
                <span>{itemAtual.name}</span>
              </a>
            </li>
          ))}
        </AboutWrapper.RepoList>
      </AboutWrapper.TextArea>
    </AboutWrapper>
  );
}

// AboutMe.propTypes = {
//   repo: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//   }).isRequired,
// };

// AboutMe.propTypes = {
//   repo: PropTypes.func.isRequired,
// };
