import * as React from 'react';

import MarkdownRenderer from 'components/atoms/MarkdownRenderer';
import TextInput from 'components/atoms/TextInput';
import ArticleTitleInput from 'components/atoms/ArticleTitleInput';
import UploadArticle from 'components/atoms/UploadArticle';
import { FormGroup } from 'react-bootstrap';

const Editor = () => (
  <FormGroup>
    <ArticleTitleInput />
    <TextInput />
    <MarkdownRenderer />
    <UploadArticle />
  </FormGroup>
);

export default Editor;