const LOAD = 'blackmalrangcow/article/LOAD';

export default function reducer(state = {title: '', content: ''}, { type, title, content}) {
  if(type === LOAD) {
    return { title, content };
  }

  return state;
}

export function loadArticle(title, content) {
  return { type: LOAD, title, content };
}
