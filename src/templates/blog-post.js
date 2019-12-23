/** @jsx jsx */
import { jsx } from 'theme-ui';

import React from 'react';
import { graphql } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';

import { OutboundLink } from 'gatsby-plugin-google-analytics';
import rehypeReact from 'rehype-react';

import SEO from '../components/seo.jsx';
import Layout from '../components/layout';

import { Styled } from 'theme-ui';

const Code = props => {
  return <Styled.code>{props.children}</Styled.code>;
};

const Pre = props => {
  return <Styled.pre>{props.children}</Styled.pre>;
};

const StyledOutLink = props => {
  return (
    <Styled.a {...props} as={OutboundLink}>
      {props.children}
    </Styled.a>
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
      a: StyledOutLink,
      blockquote: Styled.blockquote,
      code: Code,
      pre: Pre,
      hr: Styled.hr
    }
  }).Compiler;

  const disqusConfig = {
    shortname: data.site.siteMetadata.social.disqus,
    config: {
      identifier: post.slug
    }
  };

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div>
        <Styled.h1>{post.frontmatter.title}</Styled.h1>

        {renderAst(post.htmlAst)}

        <DiscussionEmbed {...disqusConfig} />
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
    site {
      siteMetadata {
        social {
          disqus
        }
      }
    }
  }
`;
