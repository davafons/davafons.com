/** @jsx jsx */
import { jsx } from 'theme-ui';

import { graphql } from 'gatsby';
import { Styled } from 'theme-ui';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo.jsx';
import BlogEntry from '../components/blog-entry';


export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="David Afonso blog"/>

      <header>
        <Styled.h1>Latest blog entries</Styled.h1>
      </header>

      {posts.map(({ node }) => {
        return (
          <BlogEntry
            key={node.id}
            slug={node.fields.slug}
            readingTime={node.fields.readingTime}
            title={node.frontmatter.title}
            tags={node.frontmatter.tags}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
          ></BlogEntry>)
      })}

    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`;
