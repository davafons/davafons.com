import { rhythm } from '../utils/typography.js';

export default {
  initialColorMode: 'light',
  colors: {
    text: '#404040',
    background: '#fafaf9',
    background2: '#ffffff',
    title: '#3d2c29',
    primary: '#7198f4',
    secondary: '#4176f1',
    accent: '#e63c1a',
    muted: '#ebeffa',
    modes: {
      dark: {
        text: '#b3b9c5',
        background: '#2d2d2d',
        background2: '#202020',
        title: '#cecece',
        primary: '#7198f4',
        secondary: '#4176f1',
        accent: '#e63c1a',
        muted: '#ebeffa'
      }
    }
  },
  sizes: {
    contentWidth: rhythm(28)
  },
  styles: {
    h1: {
      color: 'title'
    },
    h2: {
      color: 'title'
    },
    h3: {
      color: 'title'
    },
    h4: {
      color: 'title'
    },
    h5: {
      color: 'title'
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      backgroundImage: 'none',
      textShadow: 'none',
      '&:hover': {
        color: 'secondary',
        backgroundColor: 'muted'
      }
    }
  }
};
