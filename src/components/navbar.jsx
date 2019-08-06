/** @jsx jsx */
import { jsx } from 'theme-ui';

import { rhythm } from '../utils/typography';

import { IoMdSunny, IoMdMoon, IoLogoGithub, IoLogoTwitter } from 'react-icons/io';

import icon from '../../content/assets/icon.png';

import { Link } from 'gatsby';
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { useColorMode } from 'theme-ui';
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
  const [colorMode, setColorMode] = useColorMode();

  // const boxShadow = colorMode === 'dark' ? '0 3px 8px -3px rgba(0,0,0,.2)' : '';
  const boxShadow = '0 1px 3px -2px rgba(0,0,0,.2)';
  const githubIconColor = colorMode === 'light' ? '#000' : '#fff';

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
        paddingTop: rhythm(0.5),
        paddingBottom: rhythm(0.2),
        margin: '0 auto',
        backgroundColor: 'background2',
        boxShadow: boxShadow
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
        <ListItem fontSize={rhythm(0.75)} float="left" to="/">
          <InnerLink to="/">
            <span>
              <img
                src={icon}
                sx={{ display: 'inline-block', height: rhythm(0.95) }}
                alt="Icon"
              />
            </span>
            <b sx={{paddingLeft: rhythm(0.2), position: "relative", top: "-5px"}}>{data.site.siteMetadata.title}</b>
          </InnerLink>
        </ListItem>

        <ListItem fontSize={rhythm(0.8)} float="right">
          <button
            sx={{
              cursor: 'pointer',
              color: '#f9bc06',
              backgroundColor: 'inherit',
              border: 'none',
              marginLeft: rhythm(0.5),
              padding: 0
            }}
            onClick={() => {
              setColorMode(colorMode === 'light' ? 'dark' : 'light');
            }}
          >
            {colorMode === 'light' ? <IoMdSunny /> : <IoMdMoon />}
          </button>
        </ListItem>

        <ListItem fontSize={rhythm(0.8)} float="right">
          <OuterLink to={githubURL}>
            <span sx={{ color: () => (colorMode === 'light' ? '#000' : '#fff') }}>
              <IoLogoGithub />
            </span>
          </OuterLink>
        </ListItem>

        <ListItem fontSize={rhythm(0.8)} float="right">
          <OuterLink to={twitterURL}>
            <IoLogoTwitter sx={{ color: '#00acee' }} />
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
