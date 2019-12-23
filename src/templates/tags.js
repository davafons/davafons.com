/** @jsx jsx */
import { jsx } from 'theme-ui';

import PropTypes from 'prop-types';

// Utilities
import kebabCase from "lodash/kebabCase"
import { rhythm } from '../utils/typography';
import { Styled } from 'theme-ui';

// Components
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

const InnerLink = props => (
  <Link
    sx={{
      backgroundImage: 'inherit',
      textDecoration: 'none',
      color: 'primary',
      textShadow: 'none'
    }}
    to={props.to}
  >
    {props.children}
  </Link>
);


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
            <InnerLink to={node.fields.slug}>

              <Styled.h3
                sx={{
                  marginBottom: rhythm(1 / 4)
                }}
              >
                {node.frontmatter.title}{' '}

                <span
                  sx={{
                    fontSize: rhythm(0.5),
                    float: 'right',
                    color: 'primary'
                  }}
                >
                  {node.frontmatter.date}
                </span>
              </Styled.h3>

              {node.frontmatter.tags ?
              <div>
                <span sx={{color: 'gray'}}>Tags: </span>
                <InnerLink key={node.frontmatter.tags[0]}
                to={`/tags/${kebabCase(node.frontmatter.tags[0])}/`}>{node.frontmatter.tags[0]}</InnerLink>
                {node.frontmatter.tags.slice(1).map((tag) => {
                return (<InnerLink key={tag} to={`/tags/${kebabCase(tag)}/`}>, {tag}</InnerLink>)
              })}</div>
              : <span></span>}


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
            </InnerLink>
          </div>
        );
      })}

      <InnerLink to="/tags">All tags</InnerLink>
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
