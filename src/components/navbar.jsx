/** @jsx jsx */
import { jsx } from 'theme-ui';

import { rhythm } from '../utils/typography';

import {
  IoLogoGithub,
  IoLogoTwitter,
} from 'react-icons/io';

import icon from '../../content/assets/icon.png';

import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { useStaticQuery, graphql } from 'gatsby';

const InnerLink = props => (
  <Link
    sx={{
      backgroundImage: 'inherit',
      textDecoration: 'none',
      color: 'inherit',
      textShadow: 'none'
    }}
    to={props.to}
  >
    {props.children}
  </Link>
);

const OuterLink = props => (
  <OutboundLink
    href={props.to}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={props.ariaLabel}
    sx={{
      color: 'inherit',
      backgroundImage: 'inherit'
    }}
  >
    {props.children}
  </OutboundLink>
);

const ListItem = props => {
  return (
    <li
      sx={{
        float: props.float,
        display: 'inline-block',
        padding: `0 ${rhythm(0.5)}`,
        margin: 0,
        fontSize: props.fontSize
      }}
      to={props.to}
    >
      {props.children}
    </li>
  );
};

const Navbar = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            social {
              github
              twitter
            }
          }
        }
      }
    `
  );

  const githubURL = `https://github.com/${data.site.siteMetadata.social.github}`;
  const twitterURL = `https://twitter.com/${data.site.siteMetadata.social.twitter}`;

  return (
    <nav
      sx={{
        paddingTop: rhythm(0.8),
      }}
    >
      <ul
        sx={{
          maxWidth: 'contentWidth',
          listStyle: 'none',
          padding: `0 ${rhythm(0.2)}`,
          margin: '0 auto',
          overflow: 'hidden'
        }}
      >
        <ListItem fontSize={rhythm(0.9)} float="left" to="/">
          <InnerLink to="/">
            <span>
              <img
                src={icon}
                sx={{ display: 'inline-block', height: rhythm(0.95) }}
                alt="Icon"
              />
            </span>
            <b sx={{ paddingLeft: rhythm(0.2), position: 'relative', top: '-5px' }}>
              {data.site.siteMetadata.title}
            </b>
          </InnerLink>
        </ListItem>

        <ListItem fontSize={rhythm(0.8)} float="right">
          <OuterLink ariaLabel="Github" to={githubURL}>
            <span sx={{ color: 'text' }}>
              <IoLogoGithub />
            </span>
          </OuterLink>
        </ListItem>

        <ListItem fontSize={rhythm(0.8)} float="right">
          <OuterLink ariaLabel="Twitter" to={twitterURL}>
            <IoLogoTwitter sx={{ color: 'text' }} />
          </OuterLink>
        </ListItem>

        <ListItem float="right">
          <InnerLink to="/about/">About</InnerLink>
        </ListItem>
      </ul>
    </nav>
  );
};

export default Navbar;
