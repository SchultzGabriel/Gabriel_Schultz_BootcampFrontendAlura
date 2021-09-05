import React from 'react';
import IndexWrapper from './style/IndexWrapper';
import Text from '../../foundation/text';
// import Button from '../../commons/Button';
import Link from '../../foundation/link';

export default function Index() {
  return (
    <IndexWrapper>
      <IndexWrapper.TextArea>
        <Text
          variant="subtitle"
          tag="h2"
          color="tertiary.light"
          textAlign={{
            md: 'center',
          }}
          textShadow="2px 2px 2px black"
        >
          Olá! eu sou
        </Text>
        <Text
          variant="title"
          tag="h1"
          color="primary.main"
          textAlign={{
            md: 'center',
          }}
          textShadow="2px 2px 2px black"
        >
          Gabriel Schultz.
        </Text>
        <Text
          variant="paragraph1"
          tag="p"
          color="secondary.main"
          textAlign={{
            fk: 'justify',
            md: 'center',
          }}
          textShadow="2px 2px 2px black"
        >
          Sou estudante de front-end, e esse portfólio visa mostrar meu trabalho, minha evolução nos
          estudos e um pouco mais sobre mim.
        </Text>
        <Text
          variant="paragraph1"
          tag="p"
          color="secondary.main"
          textAlign={{
            fk: 'justify',
            md: 'center',
          }}
          textShadow="2px 2px 2px black"
        >
          Esse website está sendo desenvolvido durante o bootcamp de front-end avançado da Alura,
          com os objetivos de fixar o conteúdo aprendido durante as aulas e organizar um porfólio
          para mostrar ao mundo nossas habilidades.
          <Link
            href="/"
            className="link"
          >
            Saiba mais sobre o Bootcamp!
          </Link>
        </Text>
        <Text
          variant="paragraph1"
          tag="p"
          color="secondary.main"
          textAlign={{
            fk: 'justify',
            md: 'center',
          }}
          textShadow="2px 2px 2px black"
        >
          Cheque meus projetos na aba ao lado! Eles são meus certificados de evolução nos estudos.
        </Text>
        <Link
          href="/contact"
          className="link"
        >
          Vamos montar uma linda parceria!
        </Link>
      </IndexWrapper.TextArea>
    </IndexWrapper>
  );
}
