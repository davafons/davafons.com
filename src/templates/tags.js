/** @jsx jsx */
import { jsx } from 'theme-ui';

import PropTypes from 'prop-types';

import Layout from '../components/layout';
import { rhythm } from '../utils/typography';
import { Styled } from 'theme-ui';

// Components
import { Link, graphql } from 'gatsby';

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  return (
    <Layout>
      <Styled.h1>{tagHeader}</Styled.h1>
      {edges.map(({ node }) => {
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

      <Link to="/tags">All tags</Link>
    </Layout>
  );
};

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired
            })
          })
        }).isRequired
      )
    })
  })
};

export default Tags;

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
