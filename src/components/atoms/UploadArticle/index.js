import * as React from 'react';

import ButtonLink from 'components/atoms/ButtonLink';

import { connect } from 'react-redux';

const postArticle = (title, content, newsPage) => () => {
  fetch('http://black-malrangcow-api.herokuapp.com/news', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ title, content, newsPage }),
  });
};

const uploadArticle = ({ title, content, newsPage }) => (
  <ButtonLink to={ `/news/load/${ newsPage }` } onClick={ postArticle(title, content, newsPage) }>
    기사 업로드
  </ButtonLink>
);

const mapStateToProps = ({ editor: { title, content }, newsPage }) => ({
  title,
  content,
  newsPage,
});

export default connect(mapStateToProps)(uploadArticle);
