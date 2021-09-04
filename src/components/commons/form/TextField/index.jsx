import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../../foundation/text';
import propToStyle from '../../../../theme/utils/propToStyle';

const InputWrapper = styled.div`
  margin-bottom: 17px;
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
  type,
  height,
}) {
  return (
    <InputWrapper>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        height={height}
      />
    </InputWrapper>
  );
}

TextField.defaultProps = {
  height: 'auto',
};

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  height: PropTypes.string,
};
