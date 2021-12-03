import LinkCTA from './link-cta';

/* Custom editor plugins for the Markdown editor of netlify-cms
   Docs: https://www.netlifycms.org/docs/custom-widgets/#registereditorcomponent
   Most are them used in code as web-components (see `/src/web-components`);
   this way we can avoid using `.mdx` format for content.
   That way, only the code we define can be executed there (web-component);
   but on the other hand, it leaves us out of the react/gatsby ecosystem
*/

export { LinkCTA };
