import * as React from 'react';

import ArticleTitle from 'components/atoms/ArticleTitle';
import ArticleContent from 'components/atoms/ArticleContent';
import { Panel } from 'react-bootstrap';

class ArticleRead extends React.Component {

  state = { pending: true, content: '' };

  fetchArticle(title) {
    fetch(`http://black-malrangcow-api.herokuapp.com/news/${ title }`)
      .then(response => response.json())
      .then(article => this.setState({ pending: false, content: article.content }) );
    return null;
  }

  render() {
    const { pending, content } = this.state;
    const { match: { params: { title } } } = this.props;

    return (
      <Panel>
        <ArticleTitle>
          { title }
        </ArticleTitle>
        {
          pending ?
            this.fetchArticle(title) :
            <ArticleContent content={ content } />
        }
      </Panel>
    );
  }
}

export default ArticleRead;
