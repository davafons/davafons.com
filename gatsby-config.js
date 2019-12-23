module.exports = {
  siteMetadata: {
    title: 'David Afonso',
    author: 'David Afonso',
    description: 'Coder. Computer Graphics & Vim enthusiast',
    siteUrl: 'https://davafons.com',
    social: {
      twitter: 'davafons',
      github: 'davafons',
      linkedin: 'davafons',
      disqus: 'davafons'
    }
  },
  plugins: [
    'gatsby-plugin-theme-ui',
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
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-reading-time'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-145148593-1',
        anonymize: true,
        respectDNT: true
      }
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'David Afonso',
        short_name: 'davafons',
        start_url: '/',
        background_color: '#fafaf9',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'content/assets/icon.png'
      }
    },
    'gatsby-plugin-offline'
  ]
};
