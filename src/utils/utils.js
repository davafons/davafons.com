import kebabCase from 'lodash/kebabCase';

export const tagNameToId = tag => {
  return kebabCase(tag);
};

export const tagToLink = tag => {
  return `/tags/${tagNameToId(tag)}/`;
};
