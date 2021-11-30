This repository is a gatsby theme, that can be used/installed as a
gatsby plugin in an other gatsby project.

Gatsby theme take advantage of `yarn` and its `workspace` feature, to
offer ease of development.

## Development

To develop locally on the theme, run the following commands from the
root of this repository:

```
git clone <this-repo-git-url>
cd <the-repo-we-just-cloned>
yarn workspace example install
yarn workspace example develop
```

> When the example is running, it will use the theme folder (inside
> this repository), as a gatsby module

## Repository Layout

This repository, has two projects in two folders, the theme, and a theme example.

### `gatsby-theme-w3f`

This directory is the theme package itself, with all code and default configuration.

- `gatsby-theme-w3f/`
  - `gatsby-config.js`: gatsby-config, starting point of theme functionalities
  - `index.js`: Since themes also function as plugins, this is an empty file that
    gatsby needs to use this theme as a plugin.
  - `package.json`: theme dependencies. `gatsby` should be a `peerDependency`.

> To develop on the theme, you have to develop through the `example`
> workspace/project.

### `example`

This is an example usage of the theme, also used to develop on the
theme.

- `example/`
  - `gatsby-config.js`: Specifies the theme that is used, the plugins,
    and their configuration
  - `src/`: Source code such as one-off pages or components that might live in
    a user's site.

You can run the example project with:

```shell
yarn workspace example develop
```

## Using the theme in a new project

This project is available as [@w3f/gatsby-theme-w3f package](https://www.npmjs.com/package/@w3f/gatsby-theme-w3f) on npm repository.

### Installation

To use this theme, install it in a project, as a npm module: `npm i
@w3f/gatsby-theme-w3f`.

### Customization of existing theme files

You can overide existing theme files in your project directory
structure. For this, we use the [Gatsby shadowing
technique](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/),
at the path `./src/@w3f/gatsby-theme-w3f/` of your project.


> For example, to overide the theme file
> `./src/components/HeaderNav.js`, we can create the file
> `./src/@w3f/gatsby-theme-w3f/components/HeaderNav.js` in our
> project.

The same goes for every other theme files.

### Develop new project features/pages

If you'd like to develop other features (pages, components etc.) in
your project, you can do it as usual for every other gatsby projects,
in its `./src/` folder.

Otherwise, to emphasize modularity, you can develop the independant
features, as [Gatsby local
plugins](https://www.gatsbyjs.com/docs/creating-a-local-plugin/).

### Debug

To debug yarn workspaces on which this theme development is based, you
can use the command `yarn workspaces info` in the project's root
folder ([see
docs](https://www.gatsbyjs.com/tutorial/building-a-theme/)).
