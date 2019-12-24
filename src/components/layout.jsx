/** @jsx jsx */
import { jsx } from 'theme-ui';

import { rhythm } from '../utils/typography';

// Components
import Navbar from '../components/navbar';
import Footer from '../components/footer';

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

      <Footer />
    </div>
  );
};
