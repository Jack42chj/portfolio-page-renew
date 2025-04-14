import React, { useState } from "react";

import * as S from "./Card.styled";
import Button from "../button/Button";

// TODO: 임시 더미데이터 작성 추후 수정 예정
const Card = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseToggle = () => setIsHovering((prev) => !prev);

  return (
    <S.CardWrapper
      onMouseOver={handleMouseToggle}
      onMouseOut={handleMouseToggle}
    >
      <S.InfoWrapper>
        <S.SubjectWrapper>
          <S.Index>03</S.Index>
          <S.Subject>SUBJECT</S.Subject>
        </S.SubjectWrapper>
        <S.IconWrapper>ICON</S.IconWrapper>
      </S.InfoWrapper>
      <S.ImageWrapper isHovering={isHovering}>IMAGE</S.ImageWrapper>
      <S.ContentWrapper>
        <S.Title>TITLE TITLE</S.Title>
        {!isHovering && <S.Description>DESCRIPTION</S.Description>}
      </S.ContentWrapper>
      {isHovering ? (
        <>
          <S.ContentWrapper>
            <S.Description>DESCRIPTION</S.Description>
          </S.ContentWrapper>
          <Button
            css={S.button}
            label="View Work"
            handleButtonClick={() => {}}
          />
        </>
      ) : (
        <>
          <S.TagWrapper>
            <S.TagBox>TAG 1</S.TagBox>
            <S.TagBox>TAGTAGTAG 2</S.TagBox>
          </S.TagWrapper>
          <S.Player>PLAY</S.Player>
        </>
      )}
    </S.CardWrapper>
  );
};

export default Card;
