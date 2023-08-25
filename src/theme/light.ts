import {createTheme} from '@shopify/restyle';

const palette = {
  whiteCream: '#f1f2f4',
  whiteBluish: '#f0f5ff',
  whiteGray: '#f5f5f5',
  orangeDark: '#fb641b',
  orangeLight: '#ff9e01',
  green: '#388e3c',
  blue: '#2873f0',
  gray: '#878787',
  black: '#212121',
  white: '#ffffff',
};

const theme = createTheme({
  colors: {
    $primary: palette.blue,
    $secondary: palette.orangeDark,
    $tertiary: palette.orangeLight,
    $Background: palette.whiteCream,
    whiteBluish: palette.whiteBluish,
    whiteGray: palette.whiteGray,
    white: palette.white,
    black: palette.black,
    green: palette.green,
    gray: palette.gray,
  },

  spacing: {
    '0': 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
  borderRadii: {
    xxs: 2,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
  },
  textVariants: {
    heading: {
      fontWeight: 'bold',
      fontSize: 30,
    },
    body: {
      fontSize: 20,
      lineHeight: 24,
    },
    defaults: {
      fontSize: 16,
      lineHeight: 20,
    },
  },
});

export type Theme = typeof theme;
export default theme;
