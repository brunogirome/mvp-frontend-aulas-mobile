import React from 'react';
import { ScrollView } from 'react-native';

import Header from '../../components/Header';
import Title from '../../components/Title';
import Button from '../../components/Button';
import SecondaryButton from '../../components/SecondaryButton';
import DishCategories from '../../components/DishCategories';

import {
  Container,
  ValueContainer,
  PriceContainer,
  PriceValueContainer,
  ValueTotal,
  PriceValueFooter,
  PortionsListContainer,
  PortionHeader,
  PortionHeaderDivider,
  PortionsLabel,
  PortionRow,
  PortionRowTitleCointaner,
  PortionTitle,
  PortionValueContainer,
  PortionValue,
  PortionFooter,
  PortionFooterValue,
  styles,
  TmpCircleIcon,
  TmpCircleIconLine,
} from './styles';

const Dish = () => {
  return (
    <>
      <Header userName="Yumi" />
      <Container>
        <ValueContainer>
          <Title style={styles.mainTitle}>Monte seu prato</Title>
          <PriceContainer>
            <PriceValueContainer>
              <Title fontSize="14px">Valor total</Title>
              <ValueTotal>R$ 1112,05</ValueTotal>
            </PriceValueContainer>
            <PriceValueFooter>
              <SecondaryButton style={styles.restartButton}>
                Reiniciar
              </SecondaryButton>
              <Button style={styles.checkoutButton}>Finalizar</Button>
            </PriceValueFooter>
          </PriceContainer>
          <PortionsListContainer>
            <PortionHeader>
              <PortionHeaderDivider>
                <PortionsLabel>Porções</PortionsLabel>
              </PortionHeaderDivider>
              <PortionHeaderDivider>
                <PortionsLabel>Valor</PortionsLabel>
              </PortionHeaderDivider>
            </PortionHeader>
            <ScrollView>
              <PortionRow>
                <PortionRowTitleCointaner>
                  <PortionTitle>Feijão Carioca</PortionTitle>
                </PortionRowTitleCointaner>
                <PortionValueContainer>
                  <PortionValue>R$ 5,50</PortionValue>
                  <TmpCircleIcon>
                    <TmpCircleIconLine />
                  </TmpCircleIcon>
                </PortionValueContainer>
              </PortionRow>
              <PortionRow>
                <PortionRowTitleCointaner>
                  <PortionTitle>Feijão Carioca</PortionTitle>
                </PortionRowTitleCointaner>
                <PortionValueContainer>
                  <PortionValue>R$ 5,50</PortionValue>
                  <TmpCircleIcon>
                    <TmpCircleIconLine />
                  </TmpCircleIcon>
                </PortionValueContainer>
              </PortionRow>
              <PortionRow>
                <PortionRowTitleCointaner>
                  <PortionTitle>Feijão Carioca</PortionTitle>
                </PortionRowTitleCointaner>
                <PortionValueContainer>
                  <PortionValue>R$ 5,50</PortionValue>
                  <TmpCircleIcon>
                    <TmpCircleIconLine />
                  </TmpCircleIcon>
                </PortionValueContainer>
              </PortionRow>
              <PortionRow>
                <PortionRowTitleCointaner>
                  <PortionTitle>Feijão Carioca</PortionTitle>
                </PortionRowTitleCointaner>
                <PortionValueContainer>
                  <PortionValue>R$ 5,50</PortionValue>
                  <TmpCircleIcon>
                    <TmpCircleIconLine />
                  </TmpCircleIcon>
                </PortionValueContainer>
              </PortionRow>
            </ScrollView>
            <PortionFooter>
              <PortionFooterValue>
                <PortionsLabel>Peso total:</PortionsLabel>
                <PortionValue>10 Kg</PortionValue>
              </PortionFooterValue>
            </PortionFooter>
          </PortionsListContainer>
        </ValueContainer>
        <DishCategories />
      </Container>
    </>
  );
};

export default Dish;
