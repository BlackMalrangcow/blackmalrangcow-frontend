import * as React from 'react';

import { connect } from 'react-redux';
import { writeContent } from 'store/editor';

const TextInput = ({ content, updateContent }) => (
  <textarea value={ content } onChange={ updateContent } />
);

const mapStateToProps = ({ editor: { content } }) => ({
  content,
});

const mapDispatchToProps = dispatch => ({
  updateContent({target: { value: content } }) {
    dispatch(writeContent(content));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);
