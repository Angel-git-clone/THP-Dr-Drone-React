import React from 'react';

function Posts(props) {
  return (
    <div>
      {props.posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{post.category_id}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
