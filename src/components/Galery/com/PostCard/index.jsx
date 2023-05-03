import React from 'react';
import style from './style.module.css'

const PostCard = ({ title, cover, body, id }) => {
  return (
    <div className={style.post}>
      <img src={cover} alt={title} />
      <div key={id} className={style.post_content}>
        <h1>{title}</h1>
        {/* <p>{body}</p> */}
      </div>
    </div>
  );
};

export default PostCard;
