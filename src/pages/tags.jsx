/** @jsx jsx */
import { jsx } from 'theme-ui';

import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import SEO from '../components/seo.jsx';
import Layout from '../components/layout';

import { Styled } from 'theme-ui';
import { Link, graphql } from "gatsby"

import { rhythm } from '../utils/typography.js';

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

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
      <SEO title={title}/>

      <Styled.h1>Tags</Styled.h1>

      <ul sx={{listStyleType: "square", marginTop: rhythm(1)}}>
        {group.map(tag => (
          <li sx={{fontSize: rhythm(0.8)}} key={tag.fieldValue}>
            <InnerLink to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </InnerLink>
          </li>
        ))}
      </ul>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}
export default TagsPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
