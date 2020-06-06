import React from 'react';

import { Container } from './styles';

const Title = ({ children, fontSize = '24px' }) => {
  return <Container fontSize={fontSize}>{children}</Container>;
};

export default Title;
