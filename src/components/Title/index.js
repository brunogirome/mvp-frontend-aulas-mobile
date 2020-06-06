import React from 'react';

import { Container } from './styles';

const Title = ({ children, fontSize }) => {
  return <Container fontSize={fontSize}>{children}</Container>;
};

export default Title;
