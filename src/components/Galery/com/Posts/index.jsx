import React from 'react';
import PostCard from "../PostCard";
import style from './style.module.css'

const Posts = ({ posts }) => {
  return (
    <div className={style.posts}>
      {posts.map(post => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          id={post.id}
          cover={post.cover}
        />

      ))}
    </div>
  );
};

export default Posts;

