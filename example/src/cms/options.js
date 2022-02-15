/* theme collections */
import strings from '@w3f/gatsby-theme-w3f/src/cms/collections/strings';

const collections = [strings]

const cmsOptions = {
  config: {
    collections: collections,
    display_url: window.location.origin,
    publish_mode: 'editorial_workflow',

    // both folder values, are overwritten
    // by some local collections config
    media_folder: '/content/media',
    public_folder: '/public',

    // re-defined in ./index.js, from env (for local backend)
    backend: {
      name: 'test-repo',
      branch: 'main',
    },
  },
};

export default cmsOptions;
