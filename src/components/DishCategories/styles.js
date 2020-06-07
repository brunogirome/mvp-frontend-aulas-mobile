import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

export const NavContainer = styled.View`
  flex-direction: row;

  padding: 0 24px;
  width: 100%;
  height: 36px;

  background: #fff;
  elevation: 6;

  border-bottom-color: ${colors.primary};
  border-bottom-width: 2px;
`;

export const NavButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 33.33%;
`;

export const CategoryContainer = styled.ScrollView.attrs({
  contentContainerStyle: { paddingTop: 24, paddingLeft: 24, paddingRight: 24 },
  numColumns: 2,
})`
  width: 100%;
`;

export const CategoryCard = styled.TouchableOpacity`
  justify-content: flex-end;

  margin-bottom: 24px;
  width: 150px;
  height: 90px;

  border-radius: 4px;

  elevation: 4;
  background: green;
`;

export const CetegoryCardFooter = styled.View`
  justify-content: center;
  align-items: flex-start;

  padding: 0 10px;
  width: 100%;
  height: 24px;

  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;

  background: ${colors.primary};
`;

export const styles = StyleSheet.create({
  NavTitle: {
    fontSize: 12,
    lineHeight: 14,
    color: colors.primary,
  },
  NavSelected: {
    backgroundColor: '#e5e5e5',
  },
  CardFootertitle: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 14,
  },
});
