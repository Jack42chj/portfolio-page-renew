import React from "react";

import * as S from "./Banner.styled";

// TODO: 임시 색상 추가 추후 아이콘 등 수정 예정
const Banner = () => {
  return (
    <S.Banner>
      <S.Content>
        You can contact
        <br />
        me here:
      </S.Content>
      <S.IconContainer>
        <S.IconWrapper>
          <S.IconBox bgColor="#000000">Github</S.IconBox>
        </S.IconWrapper>
        <S.IconWrapper>
          <S.IconBox bgColor="#21C998">Velog</S.IconBox>
        </S.IconWrapper>
        <S.IconWrapper>
          <S.IconBox bgColor="#0A66C2">LinkedIn</S.IconBox>
        </S.IconWrapper>
        <S.IconWrapper>
          <S.IconBox bgColor="#1C9DF7">Mail</S.IconBox>
        </S.IconWrapper>
      </S.IconContainer>
    </S.Banner>
  );
};

export default Banner;
