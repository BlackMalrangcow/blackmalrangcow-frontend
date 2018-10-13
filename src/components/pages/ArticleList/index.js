import * as React from 'react';

import { Carousel } from 'react-bootstrap';
import ArticlePreview from 'components/atoms/ArticlePreview';
import ReadArticleButton from 'components/atoms/ReadArticleButton';

class ArticleList extends React.Component {

  state = { pending: true, articles: [] };

  fetchArticles(newsPage) {
    fetch(`http://black-malrangcow-api.herokuapp.com/news?category=${ newsPage }&amount=5`)
      .then(response => response.json())
      .then(articles => this.setState({ pending: false, articles }));
    return null;
  }

  render() {
    const { pending, articles } = this.state;
    const { match: { params: { newsPage } } } = this.props;

    return (
      pending ?
        this.fetchArticles(newsPage) :
        <Carousel style={ { width: '900px', height: '500px', marginLeft: 'auto', marginRight: 'auto', marginTop: '100px' } }>
          {
            articles.map( ({ title, preview }, order) =>
              <Carousel.Item key={ order } animateIn={ true } animateOut={ true }>
                <ArticlePreview src={ preview } />
                <Carousel.Caption>
                  <h3>{ title }</h3>
                  <ReadArticleButton title={ title }/>
                </Carousel.Caption>
              </Carousel.Item>
                )
          }
        </Carousel>
    );
  }
}

export default ArticleList;
