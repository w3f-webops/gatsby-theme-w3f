# `@w3f/gatsby-theme-w3f` (npm)

This is a gatsby theme project, and cannot be run directly.

You can either:
- install the theme as a gatsby plugin in your project
- develop on the theme locally through the example project

This document outlines how the theme is setup, its plugin and configuration.

# Installation as a theme in a project

To use this theme, install it in a project, as a npm module: `npm i --save @w3f/gatsby-theme-w3f`.

In the project's `gatsby-config.js`, the plugin section can then define our theme, and i18n locales like so:
``` javascript
plugins: [
	{
		resolve: `@w3f/gatsby-theme-w3f`,
		options: {
			i18nLanguages: ['en', 'fr']
		}
	},
]
```

> The first language listed will be the default language.

## Customization of existing theme files (shadowing)

You can overide existing theme files in your project directory
structure. For this, we use the [Gatsby shadowing
technique](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/),
at the path `./src/@w3f/gatsby-theme-w3f/` of your project.


> For example, to overide the theme file
> `./src/components/HeaderNav.js`, we can create the file
> `./src/@w3f/gatsby-theme-w3f/components/HeaderNav.js` in our
> project.

The same goes for every other theme files.

## Develop new project features/pages

If you'd like to develop other features (pages, components etc.) in
your project, you can do it as usual for every other gatsby projects,
in its `./src/` folder.

Otherwise, to emphasize modularity, you can develop the independant
features, as [Gatsby local
plugins](https://www.gatsbyjs.com/docs/creating-a-local-plugin/).

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

### markdown editor components

We register custom markdown editor components, availale in the netlify-cms markdown widget menu. Clicking on the `+` sign (Add Component), gives access to the list of availabe editor components.

These editor components, are used in combination with javascript custom web-components.

> web-components, so we don't have to use `.mdx` file extension for content. One issue, is that we're out of the react/gatsby flow, but these elements'code could be shared indepently between projects using netlify-cms, and also, only these web-components can be executed as code by editors editing the site (vs. all sort of code & react & imports with .mdx format).

> The code of the web components is located in `./src/web-components/`.

#### `link-cta` & `<w3f-link-cta`

The `link-cta` editor component has two fields:
- `url`: the address of the web page this link will point to (as the `href` of the anchor).
- `text` || innerHTML:

It is used in combination with the custom-element `<w3f-link-cta href="" text="">text can also go here, as the innerText</w3f-link-cta>`.

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
