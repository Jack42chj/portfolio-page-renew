import React from "react";

import * as S from "./Card.styled";

// TODO: 임시 더미데이터 작성 추후 수정 예정
const Card = () => {
  return (
    <S.CardWrapper>
      <S.InfoWrapper>
        <S.SubjectWrapper>
          <S.Index>03</S.Index>
          <S.Subject>SUBJECT</S.Subject>
        </S.SubjectWrapper>
        <S.IconWrapper>ICON</S.IconWrapper>
      </S.InfoWrapper>
      <S.ImageWrapper>IMAGE</S.ImageWrapper>
      <S.ContentWrapper>
        <S.Title>TITLE TITLE</S.Title>
        <S.Description>DESCRIPTION</S.Description>
      </S.ContentWrapper>
      <S.TagWrapper>
        <S.TagBox>TAG 1</S.TagBox>
        <S.TagBox>TAGTAGTAG 2</S.TagBox>
      </S.TagWrapper>
      <S.Player>PLAY</S.Player>
    </S.CardWrapper>
  );
};

export default Card;
