/** @jsx jsx */
import { jsx } from 'theme-ui';

export default props => {
  <header
    sx={{
      padding: 4,
      color: 'background',
      backgroundColor: 'primary'
    }}
  >
    {props.children}
  </header>;
};
