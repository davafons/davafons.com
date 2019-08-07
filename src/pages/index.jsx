/** @jsx jsx */
import { jsx } from 'theme-ui';

import { Link, graphql } from 'gatsby';
import { rhythm } from '../utils/typography';
import Layout from '../components/layout';
import { Styled } from 'theme-ui';

import SEO from '../components/seo.jsx';

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="All posts" />
      <Styled.h1>Hi! Im building a fake Gatsby site as part of a tutorial!</Styled.h1>
      {posts.map(({ node }) => {
        return (
          <div sx={{ lineHeight: rhythm(1.1) }} key={node.id}>
            <Link to={node.fields.slug}>
              <Styled.h3
                sx={{
                  marginBottom: rhythm(1 / 4)
                }}
              >
                {node.frontmatter.title}{' '}
                <span
                  sx={{
                    fontSize: rhythm(0.55),
                    float: 'right',
                    color: 'primary'
                  }}
                >
                  {node.frontmatter.date}
                </span>
              </Styled.h3>
              <Styled.p sx={{ marginBottom: 1 }}>{node.excerpt}</Styled.p>
              <Styled.p sx={{ margin: 0 }}>
                <span
                  sx={{
                    fontSize: rhythm(0.6),
                    color: 'gray'
                  }}
                >
                  {node.fields.readingTime.text}
                </span>
              </Styled.p>
            </Link>
            <Styled.hr />
          </div>
        );
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
