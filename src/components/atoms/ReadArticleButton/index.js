import * as React from 'react';

import ButtonLink from 'components/atoms/ButtonLink';

const ReadArticleButton = ({ title, newsPage }) => (
  <ButtonLink to={ `/news/get/${newsPage}/${ title }` }>
    기사 읽기
  </ButtonLink>
);

export default ReadArticleButton;