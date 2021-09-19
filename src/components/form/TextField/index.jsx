/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../foundation/text';
import propToStyle from '../../../theme/utils/propToStyle';

const InputWrapper = styled.div`
  margin-bottom: 17px;

  label {
    width: 100%;
    color: ${({ theme }) => theme.colors.secondary.main.contrastText};
    text-align: left;
    font-weight: 600;
    margin-bottom: 5px;
  }
`;

const Input = styled(Text)`
  width: 100%;
  color: ${({ theme }) => theme.colors.secondary.main.contrastText};
  background-color: ${({ theme }) => theme.colors.secondary.main.color};
  border:none;
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  ${propToStyle('height')};
  
  ${({ theme, isFieldInvalid }) => isFieldInvalid && css`
    border: 1px solid;
    border-color: ${theme.colors.error.main.color};
    & + span {
      color: ${theme.colors.error.main.color};
    }
  `}
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
  height: 'auto',
};

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  height,
  label,
  error,
  isTouched,
  ...props
}) {
  const hasError = Boolean(error);
  const isFieldInvalid = hasError && isTouched;

  return (
    <InputWrapper>
      <label htmlFor={name} aria-label={name}>{label}</label>
      <Input
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        height={height}
        isFieldInvalid={isFieldInvalid}
        required
        {...props}
      />
      {isFieldInvalid && (
        <Text
          variant="paragraph5"
          color="error.main"
          textAlign="left"
          role="alert"
        >
          {error}
        </Text>
      )}
    </InputWrapper>
  );
}

TextField.defaultProps = {
  height: 'auto',
  error: '',
  isTouched: false,
};

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  height: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  isTouched: PropTypes.bool,
};
