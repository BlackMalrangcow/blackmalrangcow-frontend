import * as React from 'react';

import ButtonLink from 'components/atoms/ButtonLink';

const ReadArticleButton = ({ title }) => (
  <ButtonLink to={`/news/get/${title}`}>
    기사 읽기
  </ButtonLink>
);

export default ReadArticleButton;