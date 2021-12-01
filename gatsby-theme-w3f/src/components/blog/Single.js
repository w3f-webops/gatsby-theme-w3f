import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import { useTranslation } from '../../utils/i18n';
import { Link } from '../default/Link';

const BlogSingle = ({ model }) => {
  const { t } = useTranslation();
  const { frontmatter, html } = model;
  const { title, tags, featured_image, created_at } = frontmatter;
  const imageData = getImage(featured_image);

  return (
    <article>
      <header>
        <h1>{title}</h1>
        <p>{created_at}</p>
        {imageData && <GatsbyImage image={imageData} alt="" />}
      </header>
      <main>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
      {tags ? (
        <footer>
          <h2>Tags</h2>
          <ul>
            {tags.map(tag => (
              <li key={tag}>
                <Link to={`/tags/${tag}`}>{t(tag)}</Link>
              </li>
            ))}
          </ul>
        </footer>
      ) : null}
    </article>
  );
};

export default BlogSingle;
