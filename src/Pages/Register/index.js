import React from 'react';
import { View } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import CheckBox from '@react-native-community/checkbox';

import {
  Container,
  Text,
  TextContainer,
  ContractContainer,
  styles,
  checkBoxColors,
} from './styles';

import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Register = () => {
  return (
    <Container>
      <Title style={styles.title}>Insira seus dados</Title>
      <Input style={styles.input} placeholder="Nome" />
      <Input style={styles.input} placeholder="Email" />
      <Input style={styles.input} placeholder="Telefone" />
      <Input style={styles.input} placeholder="CPF" />
      <Input style={styles.input} placeholder="Senha" />
      <Input style={styles.input} placeholder="Repetir Senha" />
      <ContractContainer>
        <CheckBox tintColors={checkBoxColors} />
        <View>
          <TextContainer>
            <Text>Eu aceito os </Text>
            <Title fontSize="14px">Termos de contrato</Title>
          </TextContainer>
          <TextContainer>
            <Text>da POINT SERVICE</Text>
          </TextContainer>
        </View>
      </ContractContainer>
      <Button style={styles.button}>Cadastrar</Button>
    </Container>
  );
};

export default Register;
