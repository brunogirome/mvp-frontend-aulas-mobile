import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex-direction: row;

  padding: 10px 24px;
  width: 100%;
  height: 64px;

  background: #fff;

  elevation: 8;
`;

export const Text = styled.Text`
  color: ${colors.text};

  font-family: 'Raleway-Medium';
  font-size: 14px;
  line-height: 16px;
`;

export const TextContainer = styled.View`
  margin-left: 30px;
  padding: 2px;
`;
