/** @jsx jsx */
import { jsx } from 'theme-ui';

import { Styled } from 'theme-ui';
import { graphql } from "gatsby"
import { rhythm } from '../utils/typography';
import { tagToLink } from '../utils/utils';

// Components
import SEO from '../components/seo.jsx';
import Layout from '../components/layout';
import InnerLink from '../components/innerlink';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
      <SEO title="Tags"/>

      <header>
        <Styled.h1>Tags</Styled.h1>
      </header>

      <ul sx={{listStyleType: "square", marginTop: rhythm(1)}}>

        {group.map(tag => (
          <li key={tag.fieldValue}>
            <InnerLink to={tagToLink(tag.fieldValue)}>
              {tag.fieldValue} ({tag.totalCount})
            </InnerLink>
          </li>
        ))}

      </ul>
  </Layout>
)

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default TagsPage
