import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.TextInput`
  width: 100%;
  height: 40px;

  padding: 0px 15px;
  border-radius: 4px;

  color: ${colors.text};
  font-family: 'Raleway-Medium';
  font-size: 14px;
  line-height: 16px;

  background-color: ${colors.gray};

  border: 1px solid rgba(231, 42, 49, 0.7);
`;
