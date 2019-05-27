module.exports = {
  siteMetadata: {
    title: 'Jane You - Thriving for Data, Discipline, Creativity',
    description: 'My personal website, sharing my projects, favorite quotes, and more...',
    keywords: 'Jane You, react, portfolio, analytics, PM, product manager, product management'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '9dxtfqa9es3b',
        accessToken: 'daTGF58cbd7KN-T8c-R_shmcAMeKSiqLUpsL-zcAa3I'
      }
    }
  ],
}
