import * as React from 'react';

import ArticleTitle from 'components/atoms/ArticleTitle';
import ArticleContent from 'components/atoms/ArticleContent';
import { Panel } from 'react-bootstrap';

class ArticleRead extends React.Component {

  state = { pending: true, content: '' };

  fetchArticle(title, newsPage) {
    fetch(`http://black-malrangcow-api.herokuapp.com/news/${newsPage}/${ title }`)
      .then(response => response.json())
      .then(article => this.setState({ pending: false, content: article.content }) );
    return null;
  }

  render() {
    const { pending, content } = this.state;
    const { match: { params: { title, newsPage } } } = this.props;

    return (
      <Panel>
        <ArticleTitle>
          { title }
        </ArticleTitle>
        {
          pending ?
            this.fetchArticle(title, newsPage) :
            <ArticleContent content={ content } />
        }
      </Panel>
    );
  }
}

export default ArticleRead;
