import React from 'react';
import './Formations.css';
import Video from '../../assets/trailer-Dr-drone-def.mp4';

export default function Formations() {
  return (
    <div>
      <span>
        <div>
          <h2>Title</h2>
          <p>Hello</p>
        </div>
        <video 
          autoplay 
          loop 
          muted 
          width='540'
          height='100%'
          id='video'
        >
          <source src={Video} type="video/mp4" />
        </video>
      </span>
      <span>
        <p>Helloooooo</p>
      </span>
    </div>
  );
}
