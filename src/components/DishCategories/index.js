import React from 'react';

import {
  CategoryContainer,
  CetegoryCardFooter,
  CategoryCard,
  NavContainer,
  NavButton,
  styles,
} from './styles';

import Title from '../Title';

const DishCategories = () => {
  return (
    <>
      <NavContainer>
        <NavButton style={styles.NavSelected}>
          <Title style={styles.NavTitle}>Principal</Title>
        </NavButton>
        <NavButton>
          <Title style={styles.NavTitle}>Bebidas</Title>
        </NavButton>
        <NavButton>
          <Title style={styles.NavTitle}>Sombremesas</Title>
        </NavButton>
      </NavContainer>
      <CategoryContainer>
        <CategoryCard>
          <CetegoryCardFooter>
            <Title style={styles.CardFootertitle}>Grãos e Cereais</Title>
          </CetegoryCardFooter>
        </CategoryCard>
      </CategoryContainer>
    </>
  );
};

export default DishCategories;
