import { combineReducers } from 'redux';

import editorReducer from './editor';
import newsReducer from './news';

export default combineReducers({
  editor: editorReducer,
  newsPage: newsReducer,
});
