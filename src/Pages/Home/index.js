import React from 'react';

import {
  Container,
  NewOrderContainer,
  NewOrderButtonContainer,
  TitleContainer,
  PendingListContainer,
  MiddleContainer,
  ItemList,
  ItemContainer,
  ItemFooter,
  ItemTextContainer,
  PortionsText,
  ValueContainer,
  ValueTextContainer,
  ValueTextLabel,
  ValueText,
  StatusContainer,
  StatusText,
  TotalContainer,
  TotalLabel,
  TotalValue,
  HistoryListContainer,
} from './styles';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Title from '../../components/Title';

const Home = () => {
  return (
    <>
      <Header userName="Yumi" />
      <Container>
        <NewOrderContainer>
          <NewOrderButtonContainer>
            <Button>Novo pedido</Button>
          </NewOrderButtonContainer>
          <TitleContainer>
            <Title fontSize="18px">Pedidos pendentes</Title>
          </TitleContainer>
        </NewOrderContainer>
        <PendingListContainer>
          <ItemList>
            <ItemContainer>
              <ItemTextContainer>
                <PortionsText>
                  100g feijão carioca, 200g de arroz branco, 2 temperos baianos,
                  1 refrigerante Coca-Cola, Lorem ipsum dale frawles
                </PortionsText>
                <ValueContainer>
                  <ValueTextContainer>
                    <ValueTextLabel>Data:</ValueTextLabel>
                    <ValueText>20/04/2020</ValueText>
                  </ValueTextContainer>
                  <ValueTextContainer>
                    <ValueTextLabel>Hora:</ValueTextLabel>
                    <ValueText>13:40:50</ValueText>
                  </ValueTextContainer>
                </ValueContainer>
              </ItemTextContainer>
              <ItemFooter>
                <StatusContainer>
                  <StatusText>À Caminho!</StatusText>
                </StatusContainer>
                <TotalContainer>
                  <TotalLabel>Total:</TotalLabel>
                  <TotalValue>R$ 1112,05</TotalValue>
                </TotalContainer>
              </ItemFooter>
            </ItemContainer>
            <ItemContainer>
              <ItemTextContainer>
                <PortionsText>
                  100g feijão carioca, 200g de arroz branco, 2 temperos baianos,
                  1 refrigerante Coca-Cola, Lorem ipsum dale frawles
                </PortionsText>
                <ValueContainer>
                  <ValueTextContainer>
                    <ValueTextLabel>Data:</ValueTextLabel>
                    <ValueText>20/04/2020</ValueText>
                  </ValueTextContainer>
                  <ValueTextContainer>
                    <ValueTextLabel>Hora:</ValueTextLabel>
                    <ValueText>13:40:50</ValueText>
                  </ValueTextContainer>
                </ValueContainer>
              </ItemTextContainer>
              <ItemFooter>
                <StatusContainer>
                  <StatusText>À Caminho!</StatusText>
                </StatusContainer>
                <TotalContainer>
                  <TotalLabel>Total:</TotalLabel>
                  <TotalValue>R$ 1112,05</TotalValue>
                </TotalContainer>
              </ItemFooter>
            </ItemContainer>
          </ItemList>
        </PendingListContainer>
        <MiddleContainer>
          <TitleContainer>
            <Title fontSize="18px">Histórico</Title>
          </TitleContainer>
        </MiddleContainer>
        <HistoryListContainer>
          <ItemList>
            <ItemContainer>
              <ItemTextContainer>
                <PortionsText>
                  100g feijão carioca, 200g de arroz branco, 2 temperos baianos,
                  1 refrigerante Coca-Cola, Lorem ipsum dale frawles
                </PortionsText>
                <ValueContainer>
                  <ValueTextContainer>
                    <ValueTextLabel>Data:</ValueTextLabel>
                    <ValueText>20/04/2020</ValueText>
                  </ValueTextContainer>
                  <ValueTextContainer>
                    <ValueTextLabel>Hora:</ValueTextLabel>
                    <ValueText>13:40:50</ValueText>
                  </ValueTextContainer>
                </ValueContainer>
              </ItemTextContainer>
              <ItemFooter>
                <StatusContainer>
                  <StatusText>À Caminho!</StatusText>
                </StatusContainer>
                <TotalContainer>
                  <TotalLabel>Total:</TotalLabel>
                  <TotalValue>R$ 1112,05</TotalValue>
                </TotalContainer>
              </ItemFooter>
            </ItemContainer>
            <ItemContainer>
              <ItemTextContainer>
                <PortionsText>
                  100g feijão carioca, 200g de arroz branco, 2 temperos baianos,
                  1 refrigerante Coca-Cola, Lorem ipsum dale frawles
                </PortionsText>
                <ValueContainer>
                  <ValueTextContainer>
                    <ValueTextLabel>Data:</ValueTextLabel>
                    <ValueText>20/04/2020</ValueText>
                  </ValueTextContainer>
                  <ValueTextContainer>
                    <ValueTextLabel>Hora:</ValueTextLabel>
                    <ValueText>13:40:50</ValueText>
                  </ValueTextContainer>
                </ValueContainer>
              </ItemTextContainer>
              <ItemFooter>
                <StatusContainer>
                  <StatusText>À Caminho!</StatusText>
                </StatusContainer>
                <TotalContainer>
                  <TotalLabel>Total:</TotalLabel>
                  <TotalValue>R$ 1112,05</TotalValue>
                </TotalContainer>
              </ItemFooter>
            </ItemContainer>
            <ItemContainer>
              <ItemTextContainer>
                <PortionsText>
                  100g feijão carioca, 200g de arroz branco, 2 temperos baianos,
                  1 refrigerante Coca-Cola, Lorem ipsum dale frawles
                </PortionsText>
                <ValueContainer>
                  <ValueTextContainer>
                    <ValueTextLabel>Data:</ValueTextLabel>
                    <ValueText>20/04/2020</ValueText>
                  </ValueTextContainer>
                  <ValueTextContainer>
                    <ValueTextLabel>Hora:</ValueTextLabel>
                    <ValueText>13:40:50</ValueText>
                  </ValueTextContainer>
                </ValueContainer>
              </ItemTextContainer>
              <ItemFooter>
                <StatusContainer>
                  <StatusText>À Caminho!</StatusText>
                </StatusContainer>
                <TotalContainer>
                  <TotalLabel>Total:</TotalLabel>
                  <TotalValue>R$ 1112,05</TotalValue>
                </TotalContainer>
              </ItemFooter>
            </ItemContainer>
            <ItemContainer>
              <ItemTextContainer>
                <PortionsText>
                  100g feijão carioca, 200g de arroz branco, 2 temperos baianos,
                  1 refrigerante Coca-Cola, Lorem ipsum dale frawles
                </PortionsText>
                <ValueContainer>
                  <ValueTextContainer>
                    <ValueTextLabel>Data:</ValueTextLabel>
                    <ValueText>20/04/2020</ValueText>
                  </ValueTextContainer>
                  <ValueTextContainer>
                    <ValueTextLabel>Hora:</ValueTextLabel>
                    <ValueText>13:40:50</ValueText>
                  </ValueTextContainer>
                </ValueContainer>
              </ItemTextContainer>
              <ItemFooter>
                <StatusContainer>
                  <StatusText>À Caminho!</StatusText>
                </StatusContainer>
                <TotalContainer>
                  <TotalLabel>Total:</TotalLabel>
                  <TotalValue>R$ 1112,05</TotalValue>
                </TotalContainer>
              </ItemFooter>
            </ItemContainer>
          </ItemList>
        </HistoryListContainer>
      </Container>
    </>
  );
};

export default Home;
