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

export const CardWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  column-gap: 8px;
  margin-top: 80px;
`;
