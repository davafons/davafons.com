import React from 'react';

import Layout from '../components/layout';

import { Styled } from 'theme-ui';

import SEO from '../components/seo.jsx';

export default () => (
  <Layout>
    <SEO title="About" />
    <Styled.h1>About me</Styled.h1>
    <Styled.p>
      I’m good enough, I’m smart enough, and gosh darn it, people like me!
    </Styled.p>
  </Layout>
);
