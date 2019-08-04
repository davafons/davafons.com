/** @jsx jsx */
import { jsx } from 'theme-ui';

import { rhythm } from '../utils/typography';

// import { useColorMode } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';

const Navbar = props => {
  // const [colorMode, setColorMode] = useColorMode();

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <nav
      class="Navbar"
      sx={{
        padding: rhythm(0.6),
        backgroundColor: 'white'
      }}
    >
      <div
        sx={{
          maxWidth: 'contentWidth',
          margin: '0 auto'
        }}
      >
        <ul sx={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
        }}>
        <li sx={{
          display: "block",
          backgroundColor: "gray",
          float: "left"
          }}>{data.site.siteMetadata.title}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
