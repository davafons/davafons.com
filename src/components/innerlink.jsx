/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const InnerLink = (props) => {
  return (<Link
    sx={{
      backgroundImage: 'inherit',
      textDecoration: 'none',
      color: 'primary',
      textShadow: 'none'
    }}
    to={props.to}
  >
    {props.children}
  </Link>)};

export default InnerLink;
