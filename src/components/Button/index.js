import React from 'react';

import { Container, TextButton } from './styles';

const Button = ({ children }) => {
  return (
    <Container>
      <TextButton>{children}</TextButton>
    </Container>
  );
};

export default Button;
