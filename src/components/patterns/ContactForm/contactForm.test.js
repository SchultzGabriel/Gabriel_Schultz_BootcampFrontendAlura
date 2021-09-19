/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import user from '@testing-library/user-event';
import ContactForm from './index';
import {
  render,
  act,
  screen,
  waitFor,
} from '../../../infra/test/testUtils';

const onSubmit = jest.fn();
onSubmit.mockImplementation((event) => {
  event.preventDefault();
});

describe('<FormLogin />', () => {
  describe('when from fields are valid', () => {
    test('complete the sumission', async () => {
      await act(async () => render(
        <ContactForm
          onSubmit={onSubmit}
        />,
      ));

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();

      const inputNome = screen.getByPlaceholderText(/Nome/);
      user.type(inputNome, 'Gabreu');
      await waitFor(() => expect(inputNome).toHaveValue('Gabreu'));

      const inputEmail = screen.getByPlaceholderText(/nome@domínio.com/);
      user.type(inputEmail, 'teste@teste.com');
      await waitFor(() => expect(inputEmail).toHaveValue('teste@teste.com'));

      const inputMensagem = screen.getByPlaceholderText(/Envie sua mensagem/i);
      user.type(inputMensagem, 'Olá! Vamos fazer contato.');
      await waitFor(() => expect(inputMensagem).toHaveValue('Olá! Vamos fazer contato.'));

      expect(button).not.toBeDisabled();

      await act(async () => user.click(button));

      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe('when form fields are invalid', () => {
    test('displays the respective errors', async () => {
      render(<ContactForm onSubmit={onSubmit} />);

      const inputEmail = screen.getByPlaceholderText(/nome@domínio.com/);
      inputEmail.focus();
      user.type(inputEmail, 'teste.com');
      inputEmail.blur();

      await waitFor(() => screen.getByRole('alert'));

      expect(screen.getByRole('alert')).toHaveTextContent('Insira um email válido');
    });
  });
});
