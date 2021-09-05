import typographyVariants from './typographyVariants';

export const colors = {
  background: {
    main: {
      color: '#212121',
    },
    light: {
      color: '#FFFFFF',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#000',
      contrastText: '#64DFDF',
    },
  },
  secondary: {
    main: {
      color: '#323232',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#DAA520',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
  modes: {
    dark: {},
  },
};

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
  fk: 4000,
};

export default {
  colors,
  typographyVariants,
  breakpoints,
  borderRadius: '12px',
  transition: '200ms ease-in-out',
  fontFamily: '\'Roboto\', sans-serif',
};
