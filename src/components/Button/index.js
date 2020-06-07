import React from 'react';

import { Container, TextButton } from './styles';

const Button = (props) => {
  const { children } = props;

  return (
    <Container {...props}>
      <TextButton>{children}</TextButton>
    </Container>
  );
};

export default Button;
