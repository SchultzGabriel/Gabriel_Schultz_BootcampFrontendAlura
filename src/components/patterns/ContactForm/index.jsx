import React from 'react';
import * as yup from 'yup';
import { Lottie } from '@crello/react-lottie';
import PropTypes from 'prop-types';
import Form from './style/FormWrapper';
import Button from '../../commons/Button';
import Box from '../../foundation/layout/Box';
import TextField from '../../form/TextField';
import useForm from '../../../infra/hooks/forms/useForm';
import messageService from '../../../services/sendMessage/messageService';
import errorAnimation from './animations/error.json';
import doneAnimation from './animations/success.json';
import loadingAnimation from './animations/loading.json';

const loginSchema = yup.object().shape({
  user: yup
    .string()
    .required('"Usuario" é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
  email: yup
    .string()
    .email('Insira um email válido')
    .required('"Email" é obrigatório'),
  message: yup
    .string()
    .required('"Mensagem" é obrigatória')
    .min(8, 'Sua mensagem precisa ter ao menos 8 caracteres'),
});

export default function ContactForm({ onSubmit }) {
  const formStates = {
    DEFAULT: 'DEFAULT',
    LOADING: 'LOADING',
    DONE: 'DONE',
    ERROR: 'ERROR',
  };

  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);

  const initialValues = {
    user: '',
    email: '',
    message: '',
  };
  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      setSubmissionStatus(formStates.LOADING);
      form.setIsFormDisabled(true);
      // setSubmissionStatus(formStates.LOADING);
      setIsFormSubmited(true);
      messageService.send({
        user: values.user,
        email: values.email,
        message: values.message,
      })
        .then(() => {
          console.log('funfou sepá');
        })
        .catch((err) => {
          setSubmissionStatus(formStates.ERROR);
          console.error(err);
        })
        .finally(() => {
          form.setIsFormDisabled(false);
        });
    },
    async validateSchema(values) {
      return loginSchema.validate(values, {
        abortEarly: false,
      });
    },
  });

  return (
    <Form>
      <form id="formCadastro" onSubmit={onSubmit || form.handleSubmit}>
        <div>
          <TextField
            label="Nome"
            placeholder="Nome"
            name="user"
            value={form.values.user}
            error={form.errors.user}
            isTouched={form.touched.user}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </div>
        <div>
          <TextField
            label="Email"
            placeholder="nome@domínio.com"
            name="email"
            value={form.values.email}
            error={form.errors.email}
            isTouched={form.touched.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </div>
        <div>
          <TextField
            label="Mensagem"
            placeholder="Envie sua mensagem"
            name="message"
            value={form.values.message}
            error={form.errors.message}
            isTouched={form.touched.message}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            height="100px"
          />
        </div>
        <Button
          variant="primary.main"
          type="submit"
          disabled={form.isFormDisabled}
          fullWidth
        >
          Enviar!
        </Button>
      </form>

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="100px"
            height="100px"
            config={{ animationData: doneAnimation, loop: false, autoplay: true }}
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
            width="100px"
            height="100px"
            config={{ animationData: errorAnimation, loop: false, autoplay: true }}
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
            width="100px"
            height="100px"
            config={{ animationData: loadingAnimation, loop: true, autoplay: true }}
          />
        </Box>
      )}
    </Form>
  );
}

ContactForm.defaultProps = {
  onSubmit: undefined,
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
