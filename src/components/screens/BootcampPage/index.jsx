/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import BootcampWrapper from './style/BootcampWrapper';
import Text from '../../foundation/text';
import Box from '../../foundation/layout/Box';
import modules from '../../../../modules.json';
import Link from '../../foundation/link';

export default function BootcampCase() {
  const teachers = [
    {
      name: 'Mário Souto',
      github: 'omariosouto',
    },
    {
      name: 'Juliana Amoasei',
      github: 'JulianaAmoasei',
    },
    {
      name: 'Juliana Negreiros',
      github: 'juunegreiros',
    },
  ];
  return (
    <BootcampWrapper>
      <Box
        display="flex"
      >
        <Text
          variant="title"
          tag="h1"
          color="tertiary.light"
          textAlign={{
            md: 'center',
          }}
          textShadow="2px 2px 2px black"
        >
          O BOOTCAMP
        </Text>
      </Box>
      <BootcampWrapper.TextArea>
        <Box
          margin="1rem"
        >
          <Text
            variant="paragraph1"
            tag="p"
            color="secondary.main"
            textAlign={{
              fk: 'justify',
            }}
            textShadow="2px 2px 2px black"
          >
            O Bootcamp de front-end avançado da Alura tem como objetivo trazer tudo que há de mais
            moderno e atual no mercado de front-end. Com um time de peso, contando com grandes
            professores e uma equipe especial de student experience, a Alura propõe um aprendizado
            dinâmico com aprimoramento de skills muito além do código, visando a formação de um
            profissional completo.
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
            Dividido em módulos, o bootcamp traz conteúdos que formam bases sólidas para o
            futuro dos alunos no mercado de trabalho.
          </Text>
          <Link
            href="https://github.com/SchultzGabriel/instalura"
            target="_blank"
            rel="noopener noreferrer"
            variant="tertiary.main"
          >
            Acompanhe o andamento do projeto no Github!
          </Link>
        </Box>
        <Box
          margin="1rem"
        >
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
            Grande carinho aos mestres:
          </Text>
          <ul className="teacher__list">
            {teachers.map(({ name, github }) => (
              <li key={github} className="teacher__li">
                <a target="_blank" href={`https://github.com/${github}`} rel="noreferrer" className="teacher__link">
                  <img src={`https://github.com/${github}.png`} alt="" className="teacher__image" />
                  <span className="teacher__text">{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </Box>
      </BootcampWrapper.TextArea>
      <Box
        display="flex"
        flexDirection="column"
      >
        <Text
          variant="subTitle"
          tag="h2"
          color="tertiary.light"
          textAlign={{
            md: 'center',
          }}
          textShadow="2px 2px 2px black"
        >
          Módulo 1
        </Text>
        <Text
          variant="paragraph2"
          tag="span"
          color="secondary.light"
          textAlign={{
            md: 'center',
          }}
          textShadow="2px 2px 2px black"
        >
          JAMStack e layout com React
        </Text>
      </Box>
      <BootcampWrapper.TextArea>
        <div
          margin="1rem"
          className="textdiv"
        >
          <Text
            variant="paragraph1"
            tag="p"
            color="secondary.main"
            textAlign={{
              fk: 'justify',
            }}
            textShadow="2px 2px 2px black"
          >
            O módulo 1 traz uma introdução às ferramentas e práticas básicas do desenvolvedor em
            React JS. Apresentando conceitos como CSS in JS, estrutura de componentes e padronização
            de código, o módulo apresenta um modo consistente de montar as bases de um projeto
            sólido e duradouro.
          </Text>
          <Text
            variant="paragraph1"
            tag="p"
            color="secondary.main"
            textAlign={{
              fk: 'justify',
            }}
            textShadow="2px 2px 2px black"
          >
            Opinião pessoal: de fato, o bootcamp elevou meu modo de pensar sobre desenvolvimento
            para outro patamar. A forma de lidar com os componentes, a estruturação básica e a
            automatização de processos têm evoluído num tempo recorde e o módulo não só apresenta
            a maneira atual de fazê-los, mas também lança bases para a habilidade de atualizar-se
            enquanto desenvolvedor autônomo.
          </Text>
        </div>
        <div
          className="auxdiv"
        >
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
            Principal conceito abordado:
          </Text>
          <ul className="module__list">
            {modules.module1.topics.map((item) => (
              <li key={item.name} className="module__li">
                <a href={item.link} className="module__link">
                  <img src={item.icon} alt="" className="module__image" />
                  <Text
                    variant="paragraph1"
                    tag="span"
                    color="secondary.main"
                    textAlign={{
                      fk: 'justify',
                      md: 'center',
                    }}
                    textShadow="2px 2px 2px black"
                  >
                    {item.name}
                  </Text>
                </a>
              </li>
            ))}
          </ul>
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
            Ferramentas:
          </Text>
          <ul className="module__list">
            {modules.module1.tools.map((item) => (
              <li key={item.name} className="module__li">
                <a href={item.link} className="module__link">
                  <img src={item.icon} alt="" className="module__image" />
                  <Text
                    variant="paragraph1"
                    tag="span"
                    color="secondary.main"
                    textAlign={{
                      fk: 'justify',
                      md: 'center',
                    }}
                    textShadow="2px 2px 2px black"
                  >
                    {item.name}
                  </Text>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </BootcampWrapper.TextArea>
      <Box
        display="flex"
        flexDirection="column"
      >
        <Text
          variant="subTitle"
          tag="h2"
          color="tertiary.main"
          textAlign={{
            md: 'center',
          }}
          textShadow="2px 2px 2px black"
        >
          Módulo 2
        </Text>
        <Text
          variant="paragraph2"
          tag="span"
          color="secondary.light"
          textAlign={{
            md: 'center',
          }}
          textShadow="2px 2px 2px black"
        >
          State e Forms e boas práticas de Git e GitHub
        </Text>
      </Box>
      <BootcampWrapper.TextArea>
        <div
          margin="1rem"
          className="textdiv"
        >
          <Text
            variant="paragraph1"
            tag="p"
            color="secondary.main"
            textAlign={{
              fk: 'justify',
            }}
            textShadow="2px 2px 2px black"
          >
            O módulo 2 acompanha o desenvolvimento do projeto "Instalura" criado no módulo anterior.
            Com práticas profissionais de git e manuseio avançado de objetos com JavaScript, o
            módulo traz consigo uma carga de conteúdo extremamente enriquecedora e aqueles que
            estudaram com afinco certamente não são mais os mesmos alunos de antes.
          </Text>
          <Text
            variant="paragraph1"
            tag="p"
            color="secondary.main"
            textAlign={{
              fk: 'justify',
            }}
            textShadow="2px 2px 2px black"
          >
            Opinião pessoal: Esse módulo foi um divisor de águas para aqueles
            que até então só tinham "brincado" de git. Eu, que tinha vindo dos cursinhos de
            front-end da Alura, tinha apenas realizado certas manobra de treinamento, mas esse
            módulo profissionalizou minha maneira de trabalhar com Git e Github. Certamente foi
            o módulo em que mais cresci profissionalmente (abra os commits do Instalura e analise
            antes e depois do módulo).
          </Text>
        </div>
        <div
          className="auxdiv"
        >
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
            Principal conceito abordado:
          </Text>
          <ul className="module__list">
            {modules.module2.topics.map((item) => (
              <li key={item.name} className="module__li">
                <a href={item.link} className="module__link">
                  <img src={item.icon} alt="" className="module__image" />
                  <Text
                    variant="paragraph1"
                    tag="span"
                    color="secondary.main"
                    textAlign={{
                      fk: 'justify',
                      md: 'center',
                    }}
                    textShadow="2px 2px 2px black"
                  >
                    {item.name}
                  </Text>
                </a>
              </li>
            ))}
          </ul>
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
            Ferramentas:
          </Text>
          <ul className="module__list">
            {modules.module2.tools.map((item) => (
              <li key={item.name} className="module__li">
                <a href={item.link} className="module__link">
                  <img src={item.icon} alt="" className="module__image" />
                  <Text
                    variant="paragraph1"
                    tag="span"
                    color="secondary.main"
                    textAlign={{
                      fk: 'justify',
                      md: 'center',
                    }}
                    textShadow="2px 2px 2px black"
                  >
                    {item.name}
                  </Text>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </BootcampWrapper.TextArea>
      <Box
        display="flex"
        flexDirection="column"
      >
        <Text
          variant="subTitle"
          tag="h2"
          color="tertiary.main"
          textAlign={{
            md: 'center',
          }}
          textShadow="2px 2px 2px black"
        >
          Módulo 3
        </Text>
        <Text
          variant="paragraph2"
          tag="span"
          color="secondary.light"
          textAlign={{
            md: 'center',
          }}
          textShadow="2px 2px 2px black"
        >
          Se aprofundando no NextJS
        </Text>
      </Box>
      <BootcampWrapper.TextArea>
        <div
          margin="1rem"
          className="textdiv"
        >
          <Text
            variant="paragraph1"
            tag="p"
            color="secondary.main"
            textAlign={{
              fk: 'justify',
            }}
            textShadow="2px 2px 2px black"
          >
            No embalo do módulo anterior, aqui estudamos as diversas maneiras de trabalhar com
            o framework NextJS, que facilita os mais variados processos do dia-a-dia do
            desenvolvedor front-end.
          </Text>
          <Text
            variant="paragraph1"
            tag="p"
            color="secondary.main"
            textAlign={{
              fk: 'justify',
            }}
            textShadow="2px 2px 2px black"
          >
            Opinião pessoal: Foi o módulo mais mágico de todos! Sempre quis aprender como se faz
            páginas estáticas, agora a sensação é de poder dominar o mundo!
          </Text>
        </div>
        <div
          className="auxdiv"
        >
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
            Principal conceito abordado:
          </Text>
          <ul className="module__list">
            {modules.module3.topics.map((item) => (
              <li key={item.name} className="module__li">
                <a href={item.link} className="module__link">
                  <img src={item.icon} alt="" className="module__image" />
                  <Text
                    variant="paragraph1"
                    tag="span"
                    color="secondary.main"
                    textAlign={{
                      fk: 'justify',
                      md: 'center',
                    }}
                    textShadow="2px 2px 2px black"
                  >
                    {item.name}
                  </Text>
                </a>
              </li>
            ))}
          </ul>
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
            Ferramentas:
          </Text>
          <ul className="module__list">
            {modules.module3.tools.map((item) => (
              <li key={item.name} className="module__li">
                <a href={item.link} className="module__link">
                  <img src={item.icon} alt="" className="module__image" />
                  <Text
                    variant="paragraph1"
                    tag="span"
                    color="secondary.main"
                    textAlign={{
                      fk: 'justify',
                      md: 'center',
                    }}
                    textShadow="2px 2px 2px black"
                  >
                    {item.name}
                  </Text>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </BootcampWrapper.TextArea>
    </BootcampWrapper>
  );
}
