import React from 'react';
import { Lottie } from '@crello/react-lottie';
import Box from '../../foundation/layout/Box';
import TextField from '../../form/TextField';
import Text from '../../foundation/text';
import Button from '../../commons/Button';
import Form from './style';
import errorAnimation from './animations/error.json';
import doneAnimation from './animations/success.json';
import loadingAnimation from './animations/loading.json';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);

  const [msgInfo, setMsgInfo] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setMsgInfo({
      ...msgInfo,
      [fieldName]: event.target.value,
    });
    console.log(msgInfo);
  }

  const isFormInvalid = msgInfo.name.length === 0 || msgInfo.email.length === 0
  || msgInfo.message.length === 0;

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setIsFormSubmited(true);
          setSubmissionStatus(formStates.LOADING);
          const contacter = {
            name: msgInfo.name,
            email: msgInfo.email,
            message: msgInfo.message,
          };

          fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(contacter),
          })
            .then((respostaDoServidor) => {
              if (respostaDoServidor.ok) {
                return respostaDoServidor.json();
              }
              throw new Error('Não foi possível cadastrar o usuário agora :(');
            })
            .then((respostaConvertidaEmObjeto) => {
              setSubmissionStatus(formStates.DONE);
              // eslint-disable-next-line no-console
              console.log('deu certo', respostaConvertidaEmObjeto);
            })
            .catch((error) => {
              setSubmissionStatus(formStates.ERROR);
              // eslint-disable-next-line no-console
              console.error(error);
            });
        }}
      >
        <Text
          variant="title"
          tag="h2"
          color="primary.main"
          textShadow="2px 2px 2px black"
          margin="0"
        >
          Envie sua mensagem!
        </Text>
        <div>
          <TextField
            placeholder="Nome"
            name="name"
            value={msgInfo.name}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <TextField
            placeholder="email@domínio.com"
            name="email"
            value={msgInfo.email}
            onChange={handleChange}
            type="email"
          />
        </div>
        <div>
          <TextField
            placeholder="Mensagem"
            name="message"
            value={msgInfo.message}
            onChange={handleChange}
            type="textarea"
            height="100px"
          />
        </div>
        <Button
          variant="secondary.main"
          type="submit"
          disabled={isFormInvalid}
          fullWidth
        >
          Enviar!
        </Button>
        {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            config={{ animationData: doneAnimation, loop: true, autoplay: true }}
          />
        </Box>
        )}

        {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            config={{ animationData: errorAnimation, loop: true, autoplay: true }}
          />
        </Box>
        )}

        {isFormSubmited && submissionStatus === formStates.LOADING && (
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            config={{ animationData: loadingAnimation, loop: true, autoplay: true }}
          />
        </Box>
        )}
      </form>
    </>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ propsDoModal, onClose }) {
  return (
    <Form
          // eslint-disable-next-line react/jsx-props-no-spreading
      {...propsDoModal}
    >
      <FormContent onClose={onClose} />
    </Form>
  );
}
