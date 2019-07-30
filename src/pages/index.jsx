/** @jsx jsx */
import { jsx } from 'theme-ui';

import { Link, graphql } from 'gatsby';
import { rhythm } from '../utils/typography';
import Layout from '../components/layout';

export default ({ data }) => {
  return (
    <Layout>
      <h1
        sx={{
          color: 'primary'
        }}
      >
        Hi! Im building a fake Gatsby site as part of a tutorial!
      </h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            sx={{
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <h3
              sx={{
                marginBottom: rhythm(1 / 4)
              }}
            >
              {node.frontmatter.title}{' '}
              <span
                sx={{
                  color: 'secondary'
                }}
              >
                - {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;