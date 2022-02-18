This repository is a gatsby theme development project. The theme (not the example folder) can be used/installed as a
gatsby plugin in an other gatsby project.

## Installation

To use this theme in a project, read the docs at `./gatsby-theme-w3f/readme.md`; this project is available as [@w3f/gatsby-theme-w3f package](https://www.npmjs.com/package/@w3f/gatsby-theme-w3f) on npm repository.

## Development (of the theme & example project)

Gatsby theme take advantage of `yarn` and its `workspace` feature, to
	offer ease of development.

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

### Use netlify-cms on the example site

If you want to use netlify-cms against the local repository (instead
of the one on the remote), in `./example/.env.development`, add the
line `GATSBY_NETLIFY_CMS_GIT_LOCAL=true`.

Then in a new shell (aside the local development environment for this
project), run the commands:

- `cd example`
- `npx netlify-cms-proxy-server`

### Debug

To debug yarn workspaces on which this theme development is based, you
can use the command `yarn workspaces info` in the project's root
folder ([see
docs](https://www.gatsbyjs.com/tutorial/building-a-theme/)).

## Repository Layout (theme & example project)

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

### Notes

This project's `package.json` version, is not used for anything, nor is the one from the example project.

Only the one from the theme folder is important for releasing new versions to npm.
