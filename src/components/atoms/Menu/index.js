import * as React from 'react';

import ButtonLink from 'components/atoms/ButtonLink';

import { connect } from 'react-redux';
import { movePage } from 'store/news';

const Menu = ({ nth, setNewsPage }) => (
    <ButtonLink to={ `/news/load/${ nth }` } onClick={ setNewsPage }>
      { 1980 + 10 * nth }년대
    </ButtonLink>
);

const mapDispatchToProps = dispatch => ({
  setNewsPage(newsPage) {
    dispatch(movePage(newsPage));
  }
});

export default connect(null, mapDispatchToProps)(Menu);