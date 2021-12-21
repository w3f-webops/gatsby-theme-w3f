/*
   An HTML anchor element that can be styled like a Call To Action (CTA)
*/
const LinkCTA = {
  id: 'link-cta',
  label: 'Link CTA',
  fields: [
    {
      name: 'url',
      label: 'URL',
      widget: 'string',
    },
    {
      name: 'text',
      label: 'Text',
      widget: 'string',
    },
  ],
  pattern: /^<w3f-link-cta href="(.*?)">(.*?)<\/w3f-link-cta>$/ms,
  fromBlock: function (match) {
    return {
      url: match[1],
      text: match[2],
    };
  },
  toBlock: function (data) {
    return `
<w3f-link-cta href="${data.url}">${data.text}</w3f-link-cta>
    `;
  },
  toPreview: function (data) {
    return `
<w3f-link-cta href="${data.url}">${data.text}</w3f-link-cta>
    `;
  },
};

export default LinkCTA;
