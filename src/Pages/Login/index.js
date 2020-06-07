import React from 'react';

import { Container, styles } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import SecondaryButton from '../../components/SecondaryButton';

import Logo from '../../assets/Logo-Point.svg';

const Login = () => {
  return (
    <Container>
      <Logo width={220} style={styles.logo} />
      <Input style={styles.input} placeholder="Email" />
      <Input style={styles.input} placeholder="Senha" />
      <Button style={styles.button}>Entrar</Button>
      <SecondaryButton>Cadastrar</SecondaryButton>
    </Container>
  );
};

export default Login;
