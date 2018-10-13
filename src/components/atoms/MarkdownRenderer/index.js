import * as React from 'react';
import RenderMarkdown from 'react-markdown';
import { connect } from 'react-redux';

const MarkdownRenderer = ({ content }) => (
  <RenderMarkdown source={content} />
);

const mapStateToProps = ({ editor: { content } }) => ({
  content,
});

export default connect(mapStateToProps)(MarkdownRenderer);