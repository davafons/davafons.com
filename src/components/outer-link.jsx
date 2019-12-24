/** @jsx jsx */
import { jsx } from 'theme-ui';

import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Styled } from 'theme-ui';

const OuterLink = props => {
  return (
    <Styled.a {...props} as={OutboundLink}>
      {props.children}
    </Styled.a>
  );
};

export default OuterLink;
