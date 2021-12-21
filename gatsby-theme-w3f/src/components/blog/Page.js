import React from 'react';

import BlogList from './List';
import BlogSingle from './Single';

const BlogPage = ({ model, relatedPosts, latestPosts }) => {
  return (
    <div>
      <BlogSingle model={model} />

      {relatedPosts ? (
        <section>
          <h1>Related Posts</h1>
          <BlogList models={relatedPosts} />
        </section>
      ) : null}
      {latestPosts ? (
        <section>
          <h1>Newest Posts</h1>
          <BlogList models={latestPosts} />
        </section>
      ) : null}
    </div>
  );
};

export default BlogPage;
