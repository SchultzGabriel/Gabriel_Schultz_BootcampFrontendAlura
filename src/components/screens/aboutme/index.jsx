/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import PropTypes from 'prop-types';
import AboutWrapper from './style/AboutWrapper';
import Text from '../../foundation/text';

export default function AboutMe() {
  return (
    <AboutWrapper>
      <AboutWrapper.TextArea>
        <Text
          variant="title"
          tag="h1"
          color="secondary.main"
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
          color="secondary.main"
          textAlign={{
            fk: 'justify',
          }}
          margin="1rem"
          textShadow="2px 3px 1px black"
        >
          Moro em Sertão Santana, interior do Rio Grande do Sul. Desde pequeno sou curioso
          sobre tudo e adoro construir engenhocas com engenharia eletrônica freestyle.
          <br />
          <br />
          Formado em Biologia, atuei na área da educação até o início da pandemia, migrando
          para a área de tecnologia assim que tive oportunidade, mas não abandonando o sonho de
          atuar na área com as habilidades de bom comunicador que sou.
          <br />
          <br />
          Apaixonado pelos estudos e leiura, não há nada que não desperte meu interesse.
          Nos últimos meses como estudante de tecnologia, venho me deparando com mudanças pessoais
          intensas que me impedem de listar o quão sou bom em N ferramentas ou habilidades,
          pois quanto mais estudo, mais longe do fim do caminho eu me vejo.
        </Text>
      </AboutWrapper.TextArea>
      <AboutWrapper.PhotoArea>
        <img src="/images/eu.jpg" alt="" />
      </AboutWrapper.PhotoArea>
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
