import CMS from 'netlify-cms-app';

import { LinkCTA } from './editor-components';
import options from './options';

const netlifyCmsGitLocal = process.env.GATSBY_NETLIFY_CMS_GIT_LOCAL === 'true';

if (netlifyCmsGitLocal) {
  options.config.local_backend = true;
  options.config.backend = {
    name: 'git-gateway',
  };
} else {
  // in the theme only use test repo (other wise comment out)
  options.config.local_backend = true;
  options.config.backend = {
    name: 'git-gateway',
  };
  // in a real project, use a real backend
  /* options.config.backend = {
   *   name: 'github',
   *   repo: 'organisation/project-repo',
   *   branch: 'main',
   *   auth_scope: 'repo',
   *   open_authoring: true,
   *   use_graphql: true,
   * }; */
}

/* initialize the CMS editor-components*/
CMS.registerEditorComponent(LinkCTA);

/* initialize the CMS with its config */
CMS.init(options);
