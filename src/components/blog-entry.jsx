/** @jsx jsx */
import { jsx } from 'theme-ui';

import { rhythm } from '../utils/typography';
import { Styled } from 'theme-ui';

// Components
import InnerLink from '../components/innerlink.jsx';
import TagsList from '../components/tags-list';

const BlogEntry = (props) => {
  return (
    <InnerLink to={props.slug}>

    {/* Title */}
    <Styled.h2 sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: rhythm(0.15)}}
    >
      {props.title}

      <span sx={{
          fontSize: rhythm(0.55),
          color: 'primary'
        }}
      >
        {props.date}
      </span>
    </Styled.h2>

    {/* Tags */}
    <TagsList tags={props.tags} />

    {/* Excerpt */}
      <Styled.p sx={{ marginTop: rhythm(0.25), marginBottom: rhythm(0.5) }} >
      {props.excerpt}
    </Styled.p>

    {/* Reading Time */}
    <Styled.p sx={{ fontSize: rhythm(0.6), color:'gray' }}>
      {props.readingTime.text}
    </Styled.p>

  </InnerLink>
  );
}

export default BlogEntry;
