import * as React from 'react';
import * as Redux from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import reducer from 'store/reducer';

import Topbar from 'components/organisms/Topbar';
import ArticleList from 'components/pages/ArticleList';
import ArticleRead from 'components/pages/ArticleRead';
import ArticleWrite from 'components/pages/ArticleWrite';

const store = Redux.createStore(reducer, {
  editor: {
    title: '',
    content: '',
    },
  opendArticle: {
    title: '',
    content: '',
  },
  newsPage: 1,
});

store.subscribe(() => console.log(store.getState()));

export default () => (
  <Provider store={ store }>
    <Router>
      <>
        <Topbar />
        <Route exact path='/' component={() => <ArticleList match={{params: {nth: 1}}} />}/>
        <Route exact path='/news/load/:nth(\d)' component={ ArticleList } />
        <Route exact path='/news/get/:title' component={ ArticleRead } />
        <Route exact path='/news/write' component={ ArticleWrite } />
      </>
    </Router>
  </Provider>
);
