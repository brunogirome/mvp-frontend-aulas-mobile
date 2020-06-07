import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;

  background: ${colors.gray};
`;

export const NewOrderContainer = styled.View`
  width: 100%;
  height: 168px;

  background: #fff;

  elevation: 6;
`;

export const NewOrderButtonContainer = styled.View`
  align-items: center;
  justify-content: center;

  padding: 0 24px;

  width: 100%;
  height: 136px;
`;

export const TitleContainer = styled.View`
  padding: 0 24px;
  justify-content: center;

  width: 100%;
  height: 32px;
`;

export const PendingListContainer = styled.View`
  width: 100%;
  height: 180px;
`;

export const MiddleContainer = styled.View`
  border-style: solid;
  border-top-color: ${colors.title};
  border-top-width: 2px;

  justify-content: flex-end;

  width: 100%;
  height: 48px;

  background: #fff;

  elevation: 6;
`;

export const ItemContainer = styled.View`
  margin: 12px 10px;

  border-radius: 4px;
  height: 90px;

  background: #fff;

  elevation: 4;
`;

export const ItemTextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 66px;

  padding: 10px;
`;

export const PortionsText = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-family: 'Raleway-Medium';
  color: ${colors.text};

  width: 55%;

  font-size: 12px;
  line-height: 14px;
`;

export const ValueContainer = styled.View`
  width: 40%;
`;

export const ValueTextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 5px;
  height: 14px;
`;

export const ValueTextLabel = styled.Text`
  text-transform: uppercase;

  font-family: 'Raleway-ExtraBold';

  font-size: 12px;
  line-height: 14px;

  color: ${colors.primary};
`;

export const ValueText = styled.Text`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;

  color: ${colors.title};
`;

export const ItemFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 24px;

  padding: 0 10px;

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  background: ${colors.primary};
`;

export const StatusContainer = styled.View`
  width: 55%;
`;

export const StatusText = styled.Text`
  font-family: 'Raleway-Medium';

  font-size: 14px;
  line-height: 16px;
  color: #fff;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 40%;
`;

export const TotalLabel = styled.Text`
  text-transform: uppercase;

  font-family: 'Raleway-ExtraBold';

  font-size: 14px;
  line-height: 16px;

  color: #fff;
`;

export const TotalValue = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;

  color: ${colors.secondary};
`;

export const HistoryListContainer = styled.View`
  flex: 1;
`;

export const ItemList = styled.ScrollView.attrs({
  contentContainerStyle: { paddingVertical: 12 },
})``;
