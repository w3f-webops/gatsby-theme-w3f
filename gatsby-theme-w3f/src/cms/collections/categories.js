import index from '../fields/categories/index';
import slug from '../fields/categories/slug';
import title from '../fields/categories/title';

const categories = {
  format: 'yaml-frontmatter',
  folder: 'content/en/categories',
  name: 'categories',
  label: 'Categories',
  label_singular: 'Category',
  create: true,
  slug: '{{slug}}',
  editor: {
    preview: false,
  },
  fields: [title, slug, index],
  description: 'Categories, general topics used for blog posts.',
};

export default categories;
