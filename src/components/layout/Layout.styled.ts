import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Layout = styled.section`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    background-color: ${theme.colors.blue_primary};

    @media ${theme.breakPoint.device.desktop} {
      min-height: 1080px;
      height: 100vh;
      margin: 0 auto;
      padding: 0;
    }
  `}
`;
