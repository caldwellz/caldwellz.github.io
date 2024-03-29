module.exports = {
  pathPrefix: '/public',
  siteMetadata: {
    title: 'Zach Caldwell - ePortfolio',
    siteUrl: 'http://www.zachc.cf'
  },
  plugins: ['gatsby-plugin-theme-ui', {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-87803288-2'
    }
  }, 'gatsby-plugin-image', 'gatsby-plugin-react-helmet', 'gatsby-plugin-sitemap', 'gatsby-plugin-mdx', 'gatsby-plugin-sharp', 'gatsby-transformer-sharp', {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './static/images/'
    },
    __key: 'images'
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: './src/pages/'
    },
    __key: 'pages'
  }]
};
