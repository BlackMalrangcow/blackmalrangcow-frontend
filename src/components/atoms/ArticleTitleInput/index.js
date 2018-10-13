import * as React from 'react';
import { connect } from 'react-redux';

import { writeTitle } from 'store/editor';

const ArticleTitleInput = ({ title, updateTitle }) => (
  <input value={title} style={{marginLeft: 'auto', marginRight: 'auto'}} onChange={updateTitle} placeholder='기사 제목을 입력해 주세요.'/>
);

const mapStateToProps = ({ editor: { title } }) => ({
  title,
});

const mapDispatchToProps = dispatch => ({
  updateTitle({ target: { value: title } }) {
    dispatch(writeTitle(title));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleTitleInput);
