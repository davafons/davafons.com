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

      <Styled.hr/>

      {posts.map(({ node }) => {
        return (
          <div key={node.id}>
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
                    color: 'secondary'
                  }}
                >
                  {node.frontmatter.date}
                </span>
              </Styled.h3>

              <Styled.p sx={{ marginBottom: 1 }}>{node.excerpt}</Styled.p>
              <Styled.p>
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
