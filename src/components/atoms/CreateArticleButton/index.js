import React from 'react';
import { Link } from 'react-router-dom';

const CreateArticleButton = () => (
  <button>
    <Link to='/news/write'>기사 작성하기</Link>
  </button>
);

export default CreateArticleButton;
