import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Button = styled.button`
  ${({ theme }) => css`
    ${theme.fonts.bold_16};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 156px;
    height: 64px;
    border-radius: 8px;
    color: ${theme.colors.blue_secondary};
    background-color: ${theme.colors.white};
  `}
`;
