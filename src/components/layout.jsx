/** @jsx jsx */
import { jsx } from 'theme-ui';

import { IoMdSunny } from 'react-icons/io';

import { useStaticQuery, Link, graphql } from 'gatsby';
import { Layout, Header, Main, Container, Styled, useColorMode } from 'theme-ui';

import { rhythm } from '../utils/typography';

const ListLink = props => (
  <li sx={{ float: props.float, textAlign: 'center' }}>
    <Styled.a
      sx={{
        display: 'inline-block',
        padding: `0 ${rhythm(1)}`,
        textAlign: 'center'
      }}
      as={Link}
      to={props.to}
    >
      {props.children}
    </Styled.a>
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
    <Layout>
      <div className="navbar" sx={{ backgroundColor: 'background2' }}>
        <div sx={{ maxWidth: rhythm(28), margin: '0 auto' }}>
          <ul
            sx={{
              listStyleType: 'none',
              margin: 0,
              textAlign: 'center',
              padding: rhythm(0.5)
            }}
          >
            <ListLink float="right" to="/">
              <IoMdSunny sx={{ textAlign: 'center', margin: 0, paddingBottom: 0, paddingTop: "3px" }}/>
            </ListLink>
            <ListLink float="left" to="/">
              Test
            </ListLink>
            <ListLink float="right" to="/about/">
              About
            </ListLink>
            <ListLink float="right" to="/contact/">
              Contact
            </ListLink>
          </ul>
        </div>
      </div>

      <Main>
        <Container>{children}</Container>
      </Main>
    </Layout>
  );
};
