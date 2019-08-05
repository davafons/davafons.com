import { rhythm } from '../utils/typography.js';

const theme = {
  initialColorMode: 'light',
  colors: {
    text: '#404040',
    background: '#fafaf9',
    background2: '#fafaf9',
    title: '#3d2c29',
    primary: '#4176f1',
    secondary: '#1d50c9',
    accent: '#e63c1a',
    muted: '#ebeffa',
    primaryHighlight: '#ebeffa',
    codeBackground: '#2d2d2d',
    modes: {
      dark: {
        text: '#b3b9c5',
        background: '#2d2d2d',
        background2: '#202020',
        title: '#cecece',
        primary: '#4176f1',
        secondary: '#1d50c9',
        accent: '#e63c1a',
        muted: '#ebeffa',
        primaryHighlight: '#222222',
        codeBackground: '#202020'
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
        color: 'secondary'
      }
    },
    blockquote: {
      borderLeft: 'none',
      borderColor: 'primary',
      borderLeftStyle: 'solid',
      borderLeftWidth: rhythm(0.4)
    },
    pre: {
      margin: `${rhythm(1)} 0 !important`,
      boxShadow: '2px 4px 25px rgba(0,0,0,.15) !important'
    },
    code: {
      padding: `${rhythm(0.1)} ${rhythm(0.2)} !important`
    },
    hr: {
      marginTop: rhythm(0.5),
      background: 'none',
      backgroundColor: 'text',
      borderColor: 'text'
    }
  }
};

export default theme;
