import React from 'react';
import './posts.css';

function Posts(props) {
  return (
    <div>
      {props.posts.map((post) => (
        <div key={post.id} className="background" style={{ padding: '1em', margin: '1em'}}>
          <div style={{ maxHeight: '7em' }}>
            <p style={{ color: 'white', fontWeight: 'bold' }}>{post.title}</p>
            <p>{post.content}</p>
            <p>Il appartient à la catégorie numéro <strong style={{ color: 'white' }}> {post.category_id}</strong></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
