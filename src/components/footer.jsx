/** @jsx jsx */
import { jsx } from 'theme-ui';

import { useStaticQuery, graphql } from 'gatsby';

import { rhythm } from '../utils/typography';
import { Styled } from 'theme-ui';

// Components
import OuterLink from '../components/outer-link';

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            githubRepository
          }
        }
      }
    `
  )

  const githubURL = data.site.siteMetadata.githubRepository;

  return (
    <footer>
      <Styled.hr />
      <Styled.p sx={{ fontSize: rhythm(0.5), color: "gray" }}>
        <OuterLink href={githubURL}>Source Code on Github</OuterLink>
      </Styled.p>
    </footer>
  )
};

export default Footer;
