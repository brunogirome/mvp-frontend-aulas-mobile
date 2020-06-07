import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.gray};
`;

export const ValueContainer = styled.View`
  justify-content: center;
  align-items: center;

  padding: 24px;
  width: 100%;

  background: #fff;
  elevation: 6;
`;

export const PriceContainer = styled.View`
  justify-content: space-between;

  padding: 10px;
  width: 100%;
  height: 150px;

  border-width: 2px;
  border-style: solid;
  border-color: ${colors.primary};
  border-radius: 10px;
`;

export const PriceValueContainer = styled.View`
  width: 100%;
`;

export const ValueTotal = styled.Text`
  font-size: 32px;
  line-height: 37px;
  font-weight: bold;

  color: ${colors.secondary};
`;

export const PriceValueFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;

export const PortionsListContainer = styled.View`
  margin-top: 24px;

  width: 100%;
  height: 152px;
`;

export const PortionHeader = styled.View`
  flex-direction: row;

  width: 100%;
  height: 22px;
`;

export const PortionHeaderDivider = styled.View`
  width: 50%;
`;

export const PortionsLabel = styled.Text`
  font-family: 'Raleway-ExtraBold';
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: ${colors.primary};
`;

export const PortionRow = styled.View`
  flex-direction: row;

  width: 100%;
  height: 30px;
`;

export const PortionRowTitleCointaner = styled.View`
  justify-content: center;

  width: 50%;
`;

export const PortionTitle = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 14px;
  line-height: 16px;
  color: ${colors.text};
`;

export const PortionValueContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 50%;
`;

export const PortionValue = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;

  color: ${colors.secondary};
`;

export const PortionFooter = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;

  width: 100%;
  height: 26px;

  border-top-width: 2px;
  border-top-color: ${colors.primary};
`;

export const PortionFooterValue = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 120px;
`;

export const TmpCircleIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;

  border-width: 2px;
  border-color: ${colors.primary};
  border-radius: 10px;
`;

export const TmpCircleIconLine = styled.View`
  width: 10px;
  height: 2px;

  background: ${colors.primary};
`;

export const styles = StyleSheet.create({
  mainTitle: {
    marginBottom: 24,
  },
  restartButton: {
    width: 120,
  },
  checkoutButton: {
    width: 150,
  },
});
