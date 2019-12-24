/** @jsx jsx */
import { jsx } from 'theme-ui';

import InnerLink from '../components/innerlink';
import { tagToLink } from '../utils/utils';

const TagsList = (props) => {
  const tags = props.tags;

  if(!tags) {
    return;
  }

  return(
    <div>
      <span sx={{ color: 'gray' }}>Tags: </span>

      {tags.map((tag, i) => {
        let separator = ", ";
        if(i == tags.length - 1) {
          separator = "";
        }

        return (
        <InnerLink key={tag} to={tagToLink(tag)}>
          {tag}{separator}
        </InnerLink>)
      })}

    </div>
  );

};


export default TagsList;
