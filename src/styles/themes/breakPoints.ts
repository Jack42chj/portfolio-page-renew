export const breakPoints = {
  value: {
    mobile: 420,
    desktop: 1024,
  },
  device: {
    mobile: `(min-width: 420px)`,
    desktop: `(min-width: 1024px)`,
  },
} as const;

export type BreakPointTheme = typeof breakPoints;
