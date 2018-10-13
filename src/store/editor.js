const WRITE_TITLE = 'blackmalrangcow/editor/WRITE_TITLE';
const WRITE_CONTENT = 'blackmalrangcow/editor/WRITE_CONTENT';

export default function reducer(state = { title: '', content: '' }, action) {
  switch (action.type) {
    case WRITE_TITLE:
      return { ...state, title: action.title };
    case WRITE_CONTENT:
      return { ...state, content: action.content };
    default:
      return state;
  }
}

export function writeTitle(title) {
  return { type: WRITE_TITLE, title };
}

export function writeContent(content) {
  return { type: WRITE_CONTENT, content };
}