import collections from './collections/index';

const {strings} = collections

const cmsOptions = {
  config: {
    collections: [strings],
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
