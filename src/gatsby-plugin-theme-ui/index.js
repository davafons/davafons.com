import { rhythm } from '../utils/typography.js';

const theme = {
  initialColorMode: 'light',
  colors: {
    text: '#404040',
    background: '#fafaf9',
    background2: '#f3f3f2',
    primary: '#008aff',
    secondary: '#1d50c9',
    muted: '#d4edf7',
    codeBackground: '#2d2d2d',
    modes: {
      dark: {
        text: '#c5cad3',
        background: '#2d2d2d',
        background2: '#202020',
        primary: '#008aff',
        secondary: '#1d50c9',
        muted: '#f2f2f2',
        codeBackground: '#202020'
      }
    }
  },
  sizes: {
    contentWidth: rhythm(28)
  },
  styles: {
    h1: {
      color: 'text',
      textShadow: 'none'
    },
    h2: {
      color: 'text',
      textShadow: 'none'
    },
    h3: {
      color: 'text',
      textShadow: 'none'
    },
    h4: {
      color: 'text',
      textShadow: 'none'
    },
    h5: {
      color: 'text',
      textShadow: 'none'
    },
    h6: {
      color: 'text',
      textShadow: 'none'
    },
    p: {
      color: 'text',
      textShadow: 'none',
      verticalAlign: 'middle !important'
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      backgroundImage: 'none',
      textShadow: 'none',
      '&:hover': {
        color: 'secondary',
        backgroundColor: 'muted',
        textDecoration: 'underline'
      }
    },
    blockquote: {
      borderLeft: 'none',
      borderColor: 'text',
      borderLeftStyle: 'solid',
      borderLeftWidth: rhythm(0.4),
      marginLeft: 0
    },
    pre: {
      margin: `${rhythm(1)} 0 !important`,
      boxShadow: '2px 4px 25px rgba(0,0,0,.15) !important'
    },
    code: {
      padding: `${rhythm(0.1)} ${rhythm(0.12)} ${rhythm(0.1)} ${rhythm(
        0.12
      )} !important`,
      color: '#eee !important'
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
