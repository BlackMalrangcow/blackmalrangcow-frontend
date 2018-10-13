import * as React from 'react';
import glamorous from 'glamorous'

import { connect } from 'react-redux';
import { writeTitle } from 'store/editor';

const ArticleTitleInput = glamorous(({ title, updateTitle }) => (
  <input value={ title } onChange={ updateTitle } placeholder='기사 제목을 입력해 주세요.' />
))({
  marginLeft: 'auto',
  marginRight: 'auto'
});

const mapStateToProps = ({ editor: { title } }) => ({
  title,
});

const mapDispatchToProps = dispatch => ({
  updateTitle({ target: { value: title } }) {
    dispatch(writeTitle(title));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleTitleInput);
