/** @jsx jsx */
import { jsx } from 'theme-ui';

import { useStaticQuery, Link, graphql } from 'gatsby';
import { useColorMode } from 'theme-ui';

import { rhythm } from '../utils/typography';

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: '1rem' }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default ({ children }) => {
  const [colorMode, setColorMode] = useColorMode();

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
    <div sx={{ margin: '0 auto', maxWidth: rhythm(28), padding: rhythm(1) }}>
      <header style={{ margin: '1rem 0' }}>
        <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none' }}>
          <h3 style={{ display: 'inline', fontStyle: 'normal' }}>
            {data.site.siteMetadata.title}
          </h3>
        </Link>

        <ul style={{ listStyle: 'none', float: 'right' }}>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
          <button
            onClick={() => {
              setColorMode(colorMode === 'light' ? 'dark' : 'light')
            }}>
            Toggle { colorMode === 'light' ? 'Dark' : 'Light' }
          </button>
        </ul>
      </header>

      {children}
    </div>
  );
};
