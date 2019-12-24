/** @jsx jsx */
import { jsx } from 'theme-ui';

import { rhythm } from '../utils/typography';

// Components
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default ({ children }) => {
  return (
    <body sx={{
      maxWidth: 'contentWidth',
      margin: '0 auto',
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
      padding: `0 ${rhythm(0.75)}`
    }}>
      <Navbar />

      <main
        sx={{
          flex: 1,
          marginTop: 0,
        }}
      >
        {children}
      </main>

      <Footer />

    </body>
  );
};
