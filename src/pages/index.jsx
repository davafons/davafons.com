/** @jsx jsx */
import { jsx } from 'theme-ui';

import { Link, graphql } from 'gatsby';
import { rhythm } from '../utils/typography';
import { Styled } from 'theme-ui';

// Utilities
import kebabCase from "lodash/kebabCase"

import Layout from '../components/layout';
import SEO from '../components/seo.jsx';

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

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="David Afonso blog"/>

      <Styled.h1>Latest blog entries</Styled.h1>

      {posts.map(({ node }) => {
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
