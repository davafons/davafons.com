import { rhythm } from '../utils/typography.js';

const theme = {
  colors: {
    text: '#222222',
    background: '#ffffffff',
    background2: '#f5f2f0',
    primary: '#0b7dda',
    secondary: '#1d50c9',
    highlight: '#d4edf7',
    muted: 'rgb(228, 228, 228)',
  },
  sizes: {
    contentWidth: rhythm(28)
  },
  styles: {
    p: {
      color: 'text',
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
    code: {
      padding: rhythm(0.15),
      backgroundColor: 'background2',
      borderRadius: '5px',
    },
    pre: {
      code: {
        padding: '0'
      },
      marginBottom: rhythm(1.1),
      padding: rhythm(0.5),
      backgroundColor: 'background2',
      overflow: 'auto'
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
