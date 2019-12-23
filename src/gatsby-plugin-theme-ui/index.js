import { rhythm } from '../utils/typography.js';

const theme = {
  colors: {
    text: '#303030',
    background: '#ffffffff',
    primary: '#008aff',
    secondary: '#1d50c9',
    highlight: '#d4edf7',
    muted: 'rgb(228, 228, 228)',
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
        backgroundColor: 'highlight',
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
    hr: {
      marginTop: rhythm(0.5),
      background: 'none',
      backgroundColor: 'muted',
      borderColor: 'text'
    }
  }
};

export default theme;
