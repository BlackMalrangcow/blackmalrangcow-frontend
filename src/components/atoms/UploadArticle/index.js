import * as React from 'react';
import { connect } from 'react-redux';

import ButtonLink from 'components/atoms/ButtonLink';

const postArticle = (title, content, newsPage) => async () => {
  const response = await fetch('http://black-malrangcow-api.herokuapp.com/news', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ title, content, newsPage }),
  });

  console.log(await response.text());
};

const uploadArticle = ({ title, content, newsPage }) => (
  <ButtonLink to={`/news/load/${newsPage}`} onClick={postArticle(title, content, newsPage)}>
    기사 업로드
  </ButtonLink>
);

const mapStateToProps = ({ editor: { title, content }, newsPage }) => ({
  title,
  content,
  newsPage,
});

export default connect(mapStateToProps)(uploadArticle);
