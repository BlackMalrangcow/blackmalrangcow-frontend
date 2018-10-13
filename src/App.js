import * as React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from 'store/reducer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Topbar from 'components/organisms/Topbar';
import ArticleList from 'components/pages/ArticleList';
import ArticleRead from 'components/pages/ArticleRead';
import ArticleWrite from 'components/pages/ArticleWrite';

const store = createStore(reducer, {
  editor: {
    title: '',
    content: '',
    },
  newsPage: 1,
});

export default () => (
  <Provider store={ store }>
    <Router>
      <>
        <Topbar />
        <Route exact path='/' component={() => <ArticleList match={ { params: { newsPage: 1 } } } /> }/>
        <Route exact path='/news/load/:newsPage(\d)' component={ ArticleList } />
        <Route exact path='/news/get/:newsPage/:title' component={ ArticleRead } />
        <Route exact path='/news/write' component={ ArticleWrite } />
      </>
    </Router>
  </Provider>
)
