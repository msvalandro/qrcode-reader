import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const { isDisabled } = rest;

  return (
    <Container type="button" disabled={isDisabled} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
