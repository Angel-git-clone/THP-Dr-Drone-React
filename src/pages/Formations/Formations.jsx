import React from 'react';
import './Formations.css';
import Video1 from '../../assets/trailer-Dr-drone-def.mp4';

export default function Formations() {
  return (
    <div>
      <video controls width="250" height='500' src={Video1} type="video/mp4"></video>
    </div>
  );
}
