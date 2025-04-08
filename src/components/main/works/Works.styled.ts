import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Title = styled.span`
  ${({ theme }) => css`
    @media ${theme.breakPoint.device.desktop} {
      ${theme.fonts.bold_64}
      color: ${theme.colors.white};
    }
  `}
`;
