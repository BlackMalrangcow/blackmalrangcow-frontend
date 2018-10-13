import * as React from 'react';

const ArticlePreview = ({ src }) => (
  <img alt='No given preview' src={src} style={{width: '900px', height: '500px'}} />
);

export default ArticlePreview;