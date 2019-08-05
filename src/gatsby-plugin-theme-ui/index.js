import { rhythm } from '../utils/typography.js';

export default {
  initialColorMode: 'light',
  colors: {
    text: '#404040',
    background: '#fafaf9',
    background2: '#fafaf9',
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
      color: 'title',
      textShadow: 'none'
    },
    h2: {
      color: 'title',
      textShadow: 'none'
    },
    h3: {
      color: 'title',
      textShadow: 'none'
    },
    h4: {
      color: 'title',
      textShadow: 'none'
    },
    h5: {
      color: 'title',
      textShadow: 'none'
    },
    p: {
      color: 'text',
      textShadow: 'none'
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
