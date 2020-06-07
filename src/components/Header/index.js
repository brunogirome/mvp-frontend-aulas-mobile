import React from 'react';

import { Container, TextContainer, Text } from './styles';

import Title from '../Title';

import Logo from '../../assets/Logo-Point.svg';

const Header = ({ userName }) => {
  return (
    <Container>
      <Logo width={41} height={44} />
      <TextContainer>
        <Text>Obrigado por escolher a gente,</Text>
        <Title fontSize="14px">{userName}</Title>
      </TextContainer>
    </Container>
  );
};

export default Header;
