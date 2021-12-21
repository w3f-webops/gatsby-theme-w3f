import React from 'react';

import { Link } from '../default/Link';

const ListCategories = ({ models }) => {
  return (
    <nav>
      <h1>Categories</h1>
      {models ? (
        <ul>
          {models.map(({ node }, index) => {
            const { frontmatter } = node;
            const { fields } = node;
            return (
              <li key={index}>
                <Link to={`/categories/${fields.slug}`}>
                  <h2>{frontmatter.title}</h2>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No blog categories yet.</p>
      )}
    </nav>
  );
};

export default ListCategories;
