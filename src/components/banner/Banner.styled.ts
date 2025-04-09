import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Banner = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 94px;
    width: 100%;
    height: 255px;
    border: 2px solid ${theme.colors.blue_thrid};
    border-radius: 16px;
    padding: 70px;
    background-color: ${theme.colors.blue_secondary};
  `}
`;

export const Content = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.bold_48};
    color: ${theme.colors.white};
  `}
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 44px;
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 88px;
    height: 88px;
    border-radius: 16px;
    padding: 8px;
    background-color: ${theme.colors.white};
    cursor: pointer;
  `}
`;

export const IconBox = styled.div<{ bgColor: string }>`
  ${({ bgColor }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background-color: ${bgColor};
  `}
`;
