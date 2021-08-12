# Website

This is a gatsby theme project, and cannot be run directly.

You can either:
- install the theme as a gatsby plugin in your project
- develop on the theme locally through the example project

This document outlines how the theme is setup, its plugin and configuration.

For usage on how to use as a theme, see `../readme.md`.

# Setup, configuration & plugins

## i18n

Docs:

- https://github.com/microapps/gatsby-plugin-react-i18next#how-to-extract-translations-from-pages
- https://www.i18next.com
- https://react.i18next.com

### Configuration

You can find the config for i18n, using i18next with `gatsby-plugin-react-i18next`.

- the markdown content is located in `./content/{language}/{content_type}/*`/
- the language strings are located in `./locales/{language}/{data_type}.json`

The default language (and fallback language) is `en` for english.

### Extract strings

To extract the strings that needs to be translated, it is possible to run `yarn extract-locales`, which will generate the `/locales-tmp` folder.

## netlify-cms (admin)

`netlify-cms-app` & `gatsby-plugin-netlify-cms` are used to setup `[netlify-cms](https://www.netlifycms.org)` for this project.

The gatsby gatsby-config pluggin, points to the file `src/cms/index.js`, as entry file of the configuration.

### local git-gateway backend

To develop and use netlify-cms with the data available in the local repository folder:

In the file `./.env.development` set:

```
GATSBY_NETLIFY_CMS_GIT_LOCAL=true
```

Then in the project's root folder run:

```
npx netlify-cms-proxy-server
```

and in an other shell and the same folder, run the development server as usual.
