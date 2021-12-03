/*
   This web-component creates an anchor, html link element.
   This is used inside Markdown elements (with netlify-cms
   register-editor-component)
   Paramerters:
   - `href`: the link's href to point to
   - `text` || innerText: the clickable text of the link
*/
export default class W3fLinkCTA extends HTMLElement {
  constructor() {
    super();
    this.href = this.getAttribute('href') || '#';
    this.text = this.getAttribute('text') || this.innerText || '';
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const $link = document.createElement('a');
    $link.setAttribute('href', this.href);
    $link.innerText = this.text;
    this.innerHTML = null;
    this.append($link);
  }
}
