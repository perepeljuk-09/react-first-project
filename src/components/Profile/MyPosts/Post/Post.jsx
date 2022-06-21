import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://vsthemes.org/uploads/posts/2018-05/1581998071_chimpanzee_vsthemes_ru-12.jpg' alt="avatar profile"/>
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;