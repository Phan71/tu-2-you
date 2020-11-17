require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'Tu 2 You',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'M2RhNzM3YzUtNzM2My00NWZhLWE0MWYtNzA3MWYyMGY1ZDQ4NjM3NDEyMzY5OTQwMzgzMTEz',
        autopop: true
      }
    },
  ],
}
