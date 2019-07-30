module.exports = {
  siteMetadata: {
    title: 'David Afonso',
    author: 'David Afonso',
    description: '...',
    siteUrl: 'https://davafons.com',
    social: {
      twitter: 'davafons',
      github: 'davafons'
    }
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-transformer-remark',
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/content/assets`
      }
    }
  ]
};
