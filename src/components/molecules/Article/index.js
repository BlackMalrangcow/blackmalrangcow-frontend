import * as React from 'react';

import ArticlePreview from 'components/atoms/ArticlePreview';
import ArticleTitle from 'components/atoms/ArticleTitle';
import ReadArticleButton from 'components/atoms/ReadArticleButton';

const Article = ({ title, previewSrc, nth }) => (
  <>
    <ArticlePreview src={ previewSrc } />
    <ArticleTitle>
      { title }
    </ArticleTitle>
    <ReadArticleButton nth={ nth } title={ title } />
  </>
);

export default Article;