import React from 'react';

import { Container, TextButton } from './styles';

const SecondaryButton = (props) => {
  const { children } = props;

  return (
    <Container {...props}>
      <TextButton>{children}</TextButton>
    </Container>
  );
};

export default SecondaryButton;
