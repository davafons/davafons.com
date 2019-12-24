/** @jsx jsx */
import { jsx } from 'theme-ui';

import React from 'react';
import rehypeReact from 'rehype-react';

import { graphql } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';
import { Styled } from 'theme-ui';

// Components
import SEO from '../components/seo.jsx';
import Layout from '../components/layout';
import TagsList from '../components/tags-list';
import OuterLink from '../components/outer-link';

const BlogPost = ({ data }) => {
  // Custom components for the Ast tree
  const Code = props => {
    return <Styled.code>{props.children}</Styled.code>;
  };

  const Pre = props => {
    return <Styled.pre>{props.children}</Styled.pre>;
  };

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
      a: OuterLink,
      blockquote: Styled.blockquote,
      code: Code,
      pre: Pre,
      hr: Styled.hr
    }
  }).Compiler;

  const post = data.markdownRemark;

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

      <article>
        <header>
          <Styled.h1>{post.frontmatter.title}</Styled.h1>
        </header>

        <TagsList tags={post.frontmatter.tags} />
        <br />

        {renderAst(post.htmlAst)}
      </article>

      <DiscussionEmbed {...disqusConfig} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        tags
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

export default BlogPost;
