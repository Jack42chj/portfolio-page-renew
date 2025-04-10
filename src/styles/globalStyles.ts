import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

const globalStyles = css`
  ${emotionReset}
  *,
  *::before,
  *::after {
    margin: 0;
    border-radius: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 62.5%;
  }
  body {
    overflow-y: auto;
    font-display: swap;
  }
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;

    &[disabled] {
      cursor: not-allowed;
    }
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #b0b0b0;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 173, 181, 0.1);
  }
`;

export default globalStyles;
