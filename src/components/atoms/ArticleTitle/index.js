import * as React from 'react';

import { Panel } from 'react-bootstrap';

const ArticleTitle = ({ children }) => (
  <Panel.Heading>
    <Panel.Title>
      { children }
    </Panel.Title>
  </Panel.Heading>
);

export default ArticleTitle;