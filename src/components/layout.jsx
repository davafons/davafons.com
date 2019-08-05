/** @jsx jsx */
import { jsx } from 'theme-ui';

import { rhythm } from '../utils/typography';

import Navbar from '../components/navbar';

export default ({ children }) => {
  return (
    <div>
      <Navbar />
      <main
        sx={{
          maxWidth: 'contentWidth',
          margin: '0 auto',
          padding: `0 ${rhythm(0.75)}`
        }}
      >
        {children}
      </main>
    </div>
  );
};
