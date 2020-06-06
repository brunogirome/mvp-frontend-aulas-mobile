import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.Text`
  font-family: 'Raleway-ExtraBold';
  text-transform: uppercase;
  font-size: ${(props) => props.fontSize};

  color: ${colors.title};
`;
