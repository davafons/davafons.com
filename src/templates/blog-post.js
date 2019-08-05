import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

import rehypeReact from 'rehype-react';

import { Styled } from 'theme-ui';

export default ({ data }) => {
  const post = data.markdownRemark;

  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      p: Styled.p,
      h1: Styled.h1,
      h2: Styled.h2,
      h3: Styled.h3,
      h4: Styled.h4,
      h5: Styled.h5,
      h6: Styled.h6,
      a: Styled.a,
      blockquote: Styled.blockquote,
      code: Styled.code,
      pre: Styled.pre,
      hr: Styled.hr
    }
  }).Compiler;

  return (
    <Layout>
      <div>
        <Styled.h1>{post.frontmatter.title}</Styled.h1>
        {renderAst(post.htmlAst)}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`;
