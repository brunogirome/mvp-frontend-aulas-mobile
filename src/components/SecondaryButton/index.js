import React from 'react';

import { Container, TextButton } from './styles';

const SecondaryButton = ({ children }) => {
  return (
    <Container>
      <TextButton>{children}</TextButton>
    </Container>
  );
};

export default SecondaryButton;
