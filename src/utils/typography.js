import Typography from 'typography';
import fairyGatesTheme from 'typography-theme-fairy-gates';

fairyGatesTheme.bodyFontFamily = ['SourceSansPro', 'sans-serif'];
fairyGatesTheme.baseFontSize = '19px';

const typography = new Typography(fairyGatesTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export const { scale, rhythm, options } = typography;
export default typography;
