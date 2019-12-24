/** @jsx jsx */
import { jsx } from 'theme-ui';

import { Styled } from 'theme-ui';

// Components
import SEO from '../components/seo.jsx';
import Layout from '../components/layout';
import InnerLink from '../components/innerlink';

// Assets
import image404 from '../../content/assets/404_image.png';


export default () => (
  <Layout>
    <SEO title="Not Found" />

    <div sx={{
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <img src={image404}
            sx={{
              color: 'primary',
        display: 'inline-block' }}
      >
      </img>

      <Styled.h1 sx={{ marginTop: 0 }}>Page Not Found</Styled.h1>

      <br/>

      <InnerLink to="/">All posts</InnerLink>
    </div>

  </Layout>
);
