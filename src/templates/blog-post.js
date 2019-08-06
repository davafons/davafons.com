/** @jsx jsx */
import { jsx } from 'theme-ui';

import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

import rehypeReact from 'rehype-react';

import SEO from '../components/seo.jsx';

import { Styled } from 'theme-ui';

const Code = props => {
  return (
    <Styled.code
      {...props}
      sx={{
        backgroundColor: theme => `${theme.colors.codeBackground} !important`
      }}
    >
      {props.children}
    </Styled.code>
  );
};

const Pre = props => {
  return (
    <Styled.pre
      {...props}
      sx={{
        backgroundColor: theme => `${theme.colors.codeBackground} !important`
      }}
    >
      {props.children}
    </Styled.pre>
  );
};

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
      code: Code,
      pre: Pre,
      hr: Styled.hr
    }
  }).Compiler;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
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
