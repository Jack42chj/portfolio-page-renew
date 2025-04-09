import { css } from "@emotion/react";

export const fonts = {
  regular_8: css`
    font-family: "pretendard", sans-serif;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: calc(9.6 / 8);
  `,
  regular_12: css`
    font-family: "pretendard", sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: calc(14.4 / 12);
  `,
  regular_14: css`
    font-family: "pretendard", sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: calc(16.8 / 14);
  `,
  regular_16: css`
    font-family: "pretendard", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: calc(24 / 16);
  `,
  regular_20: css`
    font-family: "pretendard", sans-serif;
    font-size: 2rem;
    font-weight: 400;
    line-height: calc(28.8 / 20);
  `,
  regular_24: css`
    font-family: "pretendard", sans-serif;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: calc(28.8 / 24);
  `,
  bold_8: css`
    font-family: "pretendard", sans-serif;
    font-size: 0.8rem;
    font-weight: 700;
    line-height: calc(9.6 / 8);
  `,
  bold_12: css`
    font-family: "pretendard", sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: calc(14.4 / 12);
  `,
  bold_14: css`
    font-family: "pretendard", sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: calc(16.8 / 14);
  `,
  bold_16: css`
    font-family: "pretendard", sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: calc(22 / 16);
  `,
  bold_20: css`
    font-family: "pretendard", sans-serif;
    font-size: 2rem;
    font-weight: 700;
    line-height: calc(24 / 20);
  `,
  bold_24: css`
    font-family: "pretendard", sans-serif;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: calc(28.8 / 24);
  `,
  bold_36: css`
    font-family: "pretendard", sans-serif;
    font-size: 3.6rem;
    font-weight: 700;
    line-height: calc(60 / 36);
  `,
  bold_48: css`
    font-family: "pretendard", sans-serif;
    font-size: 4.8rem;
    font-weight: 700;
    line-height: calc(80 / 48);
  `,
  bold_64: css`
    font-family: "pretendard", sans-serif;
    font-size: 6.4rem;
    font-weight: 700;
    line-height: calc(102 / 64);
  `,
} as const;

export type FontType = typeof fonts;
