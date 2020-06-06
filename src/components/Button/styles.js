import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 290px;
  height: 40px;

  border-radius: 4px;

  background-color: ${colors.primary};

  elevation: 5;
`;

export const TextButton = styled.Text`
  font-family: 'Raleway-ExtraBold';
  text-transform: uppercase;
  font-size: 18px;

  color: #fff;
`;
