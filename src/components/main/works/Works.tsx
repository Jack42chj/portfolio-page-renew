import React from "react";

import * as S from "./Works.styled";
import Card from "../../card/Card";
import Layout from "../../layout/Layout";

const Works = () => {
  return (
    <Layout>
      <S.Title>Works</S.Title>
      <S.CardWrapper>
        <Card />
        <Card />
        <Card />
      </S.CardWrapper>
    </Layout>
  );
};

export default Works;
