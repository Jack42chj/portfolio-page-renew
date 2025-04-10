import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Button = styled.button`
  ${({ theme }) => css`
    ${theme.fonts.bold_16};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 156px;
    height: 64px;
    border-radius: 8px;
    overflow: hidden;
    color: ${theme.colors.blue_secondary};
    background-color: ${theme.colors.white};
    transition: color 0.3s ease;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: ${theme.colors.yellow};
      transition: width 0.4s ease;
      z-index: -1;
    }

    &:hover::before {
      width: 100%;
    }

    &:hover {
      color: ${theme.colors.white};
    }
  `}
`;
