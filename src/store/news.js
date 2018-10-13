const MOVE = 'blackmalrangcow/news/MOVE';

export default function reducer(state = 1, { type, newsPage }) {
  if (type === MOVE) {
    return newsPage;
  }

  return state;
}

export function movePage(newsPage) {
  return { type: MOVE, newsPage };
}
