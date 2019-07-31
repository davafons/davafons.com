import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

import { Styled } from 'theme-ui'

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <Styled.h1>{post.frontmatter.title}</Styled.h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
