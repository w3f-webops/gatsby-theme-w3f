/* read the `.env.*` files, gatsby builtin */
/* require('dotenv').config({
 *   path: `.env.${process.env.NODE_ENV}`,
 * }); */

const siteMetadata = require('./src/@w3f/gatsby-theme-w3f/config/siteMetadata');

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: `@w3f/gatsby-theme-w3f`,
      options: {
        i18nLanguages: ['en', 'fr']
      }
    },
  ],
};
