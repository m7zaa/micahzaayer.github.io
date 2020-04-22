module.exports = {
  siteMetadata: {
    title: "Micah Zaayer",
    author: "Micah Zaayer",
    description: "Website Services"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // This path is relative to the root of the site.
        // icon: 'src/assets/images/website-icon.png', 
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
