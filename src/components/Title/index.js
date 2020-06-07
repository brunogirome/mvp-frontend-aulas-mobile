/* eslint-disable react/destructuring-assignment */
import React from 'react';

import { Container } from './styles';

const Title = (props) => {
  const { children, fontSize = '24px' } = props;

  return (
    <Container fontSize={fontSize} {...props}>
      {children}
    </Container>
  );
};

export default Title;
