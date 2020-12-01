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
        apiKey: 'NWI4MmYzMzMtZWJmYS00MjVlLWE3NDItM2RmNGJkMDhhYzIyNjM3NDEzOTU1OTA3MzUxMzcy',
        autopop: true
      }
    },
  ],
}
