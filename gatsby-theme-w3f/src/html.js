/* replace default gatsby html
	 - https://www.gatsbyjs.com/docs/custom-html
*/

import PropTypes from 'prop-types';
import React from 'react';

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} className="">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} className="Site">
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          className="Site-container"
          dangerouslySetInnerHTML={{ __html: props.body || '' }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}
