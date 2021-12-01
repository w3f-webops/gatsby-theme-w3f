import React from 'react';

import BlogList from './List';
import BlogSingle from './Single';

const BlogPage = ({ model, relatedPosts, latestPosts }) => {
  return (
    <div>
      <BlogSingle model={model} />
      <BlogList models={relatedPosts} />
      <BlogList models={latestPosts} />
    </div>
  );
};

export default BlogPage;
