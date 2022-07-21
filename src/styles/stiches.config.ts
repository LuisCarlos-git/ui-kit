import { createStitches } from '@stitches/react';

const convertPxToRem = (px: number) => `${px / 16}rem`;

export const { styled, theme, css } = createStitches({
  theme: {
    colors: {
      'bg-dark': '#0B132B',
      'green-light': '#1CE7C2',
      white: '#FFFFFF',
    },

    space: {
      8: convertPxToRem(8),
      12: convertPxToRem(12),
      16: convertPxToRem(16),
      20: convertPxToRem(20),
    },

    fontSizes: {
      12: convertPxToRem(12),
      14: convertPxToRem(14),
      16: convertPxToRem(16),
      18: convertPxToRem(18),
      20: convertPxToRem(20),
      24: convertPxToRem(24),
      28: convertPxToRem(28),
      32: convertPxToRem(32),
      36: convertPxToRem(36),
    },

    radii: {
      4: convertPxToRem(4),
      8: convertPxToRem(8),
    },

    sizes: {
      full: '100%',
      small: convertPxToRem(100),
      medium: convertPxToRem(150),
      large: convertPxToRem(200),
    },
  },
});
