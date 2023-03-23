import React from 'react';
import './Formations.css';
import Video from '../../assets/trailer-Dr-drone-def.mp4';

export default function Formations() {
  return (
    <div>
      <span>
        <p>Hello</p>
        <video width="540" height='100%' src={Video} type="video/mp4" auto autoplay loop />
      </span>
      <span>
        <p>Helloooooo</p>
      </span>
    </div>
  );
}
