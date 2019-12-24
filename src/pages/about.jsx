/** @jsx jsx */
import { jsx } from 'theme-ui';

import { Styled } from 'theme-ui';

// Components
import SEO from '../components/seo.jsx';
import Layout from '../components/layout';


export default () => (
  <Layout>
    <SEO title="About" />

    <Styled.h1>About me</Styled.h1>

    <Styled.p>
      Computer Engineering student at the University of La Laguna.
    </Styled.p>
  </Layout>
);
