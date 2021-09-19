/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../infra/test/testUtils';

import TextField from './index';

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <TextField
        label="Nome"
        placeholder="Nome"
        value="Gabreu"
        onChange={() => {}}
        name="nome"
      />
      ,
    );
    const textField = screen.getByPlaceholderText(/nome/i);
    expect(textField).toMatchSnapshot();
  });

  describe('when field is valid', () => {
    describe('and user is typing', () => {
      test('the value must be updated', () => {
        const onChangeMock = jest.fn();
        render(
          <TextField
            label="Nome"
            placeholder="Nome"
            value=""
            onChange={onChangeMock}
            name="nome"
            isTouched
          />
          ,
        );

        const inputNome = screen.getByPlaceholderText(/Nome/i);
        user.type(inputNome, 'Gabreu');
        expect(onChangeMock).toHaveBeenCalledTimes(6);
      });
    });
  });

  describe('when field is invalid', () => {
    test('displays the respective error message', () => {
      render(
        <TextField
          label="Email"
          placeholder="Email"
          value="teste.com"
          onChange={() => {}}
          name="email"
          type="email"
          isTouched
          error="Insira um email válido"
        />
        ,
      );

      const inputEmail = screen.getByPlaceholderText(/email/i);
      expect(inputEmail).toHaveValue('teste.com');
      expect(screen.getByRole('alert')).toHaveTextContent('Insira um email válido');
      expect(inputEmail).toMatchSnapshot();
    });
  });
});
