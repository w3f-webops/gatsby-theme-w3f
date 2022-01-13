import collections from './collections/index';

const cmsOptions = {
  config: {
    collections,
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
