import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 42px;
`;

export const ContractContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const TextContainer = styled.View`
  flex-direction: row;

  width: 100%;

  align-items: flex-end;
`;

export const Text = styled.Text`
  color: ${colors.text};

  font-family: 'Raleway-Medium';
  font-size: 14px;
  line-height: 18px;
`;

export const styles = StyleSheet.create({
  input: {
    marginBottom: 18,
  },
  title: {
    marginBottom: 76,
  },
  button: {
    marginTop: 25,
  },
});

export const checkBoxColors = {
  true: colors.primary,
  false: colors.primary,
  onCheckColor: colors.primary,
  boxType: 'square',
  tintColor: colors.primary,
};
