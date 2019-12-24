/** @jsx jsx */
import { jsx } from 'theme-ui';

import { graphql } from 'gatsby';
import { Styled } from 'theme-ui';

// Components
import SEO from '../components/seo.jsx';
import InnerLink from '../components/innerlink';
import Layout from '../components/layout';
import BlogEntry from '../components/blog-entry';

const TagsTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext;

  const { edges, totalCount } = data.allMarkdownRemark;

  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  return (
    <Layout>
      <SEO title={tagHeader} />

      <header>
        <Styled.h1>{tagHeader}</Styled.h1>
      </header>

      {edges.map(({ node }) => {
        return (
          <BlogEntry
            key={node.id}
            slug={node.fields.slug}
            readingTime={node.fields.readingTime}
            title={node.frontmatter.title}
            tags={node.frontmatter.tags}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
          ></BlogEntry>
        );
      })}

      <InnerLink to="/tags">All tags</InnerLink>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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

export default TagsTemplate;
