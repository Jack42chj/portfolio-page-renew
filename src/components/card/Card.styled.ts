import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CardWrapper = styled.li`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 32px;
    width: 371px;
    height: 648px;
    border: 2px solid ${theme.colors.blue_thrid};
    border-radius: 8px;
    padding: 0px 42px;
    background-color: ${theme.colors.blue_secondary};
    transition:
      width 0.3s ease,
      height 0.3s ease;
    cursor: pointer;

    &:hover {
      width: 405px;
      height: 753px;
    }
  `}
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 36px;
`;

export const SubjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Index = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.bold_20};
    color: ${theme.colors.white};
  `}
`;

export const Subject = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.bold_12};
    color: ${theme.colors.white};
  `}
`;

export const IconWrapper = styled.span`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
    border: 2px solid ${theme.colors.blue_primary};
    border-radius: 8px;
  `}
`;

export const ImageWrapper = styled.div<{ isHovering: boolean }>`
  ${({ theme, isHovering }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${isHovering && "50%"};
    aspect-ratio: 1;
    border-radius: 8px;
    background-color: ${theme.colors.white};
  `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.bold_36};
    color: ${theme.colors.white};
  `}
`;

export const Description = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.regular_16};
    color: ${theme.colors.white};
  `}
`;

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  width: 100%;
`;

export const TagBox = styled.li`
  ${({ theme }) => css`
    ${theme.fonts.bold_12}
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    height: 30px;
    border-radius: 4px;
    padding: 0px 16px;
    color: ${theme.colors.blue_secondary};
    background-color: ${theme.colors.white};
  `}
`;

export const Player = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: -5%;
    left: 12%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    border-radius: 100%;
    background-color: ${theme.colors.white};
  `}
`;

export const button = css`
  position: absolute;
  bottom: -5%;
  left: 12%;
`;
