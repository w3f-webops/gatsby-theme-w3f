export default {
  label: 'Tags',
  name: 'tags',
  widget: 'list',
  hint: `#tags (without #) that represent this data model; if a tag does not exist in the list, create it as a new "tag" data model`,
  required: false,
  fields: [
    {
      label: 'Tag',
      name: 'tag',
      widget: 'relation',
      collection: 'tags',
      value_field: 'slug',
      search_fields: ['title'],
      display_fields: ['title'],
      hint: 'A tag to add to this blog post',
      required: true,
    },
  ],
};
