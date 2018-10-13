import * as React from 'react';
import { connect } from 'react-redux';
import { movePage } from 'store/news';

import ButtonLink from 'components/atoms/ButtonLink';

const Menu = ({ nth, setNewsPage }) => (
    <ButtonLink to={`/news/load/${nth}`} onClick={setNewsPage}>
      {1980 + 10 * nth}년대
    </ButtonLink>
);

const mapDispatchToProps = dispatch => ({
  setNewsPage(newsPage) {
    dispatch(movePage(newsPage));
  }
});

export default connect(() => {}, mapDispatchToProps)(Menu);