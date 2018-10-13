import * as Redux from 'redux';

import articleReducer from './article';
import editorReducer from './editor';
import newsReducer from './news';

export default Redux.combineReducers({
  editor: editorReducer,
  opendArticle: articleReducer,
  newsPage: newsReducer,
});
