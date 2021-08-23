import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMenus = () => {
  const {
    site: {
      siteMetadata: { menus },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menus {
            main {
              id
              url
            }
            build {
              id
              url
            }
            learn {
              id
              url
            }
            network {
              id
              url
            }
            community {
              id
              url
            }
          }
        }
      }
    }
  `);
  return { menus };
};
