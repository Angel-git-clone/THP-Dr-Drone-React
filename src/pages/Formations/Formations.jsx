import './Formations.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Video from '../../assets/trailer-Dr-drone-def.mp4';
import Posts from '../posts';

const API_URL = 'https://backend-drdrone.herokuapp.com/api/posts';
// const API_URL = 'http://127.0.0.1:3000/api/posts';

async function getAPIData() {
  return axios.get(API_URL, {
    headers: {
      // 'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  }).then((response) => response.data);
}

export default function Formations() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // let mounted = true;
    getAPIData().then((items) => {
      // if (mounted) {
      setPosts(items);
      // console.log(items);
      // }
    });
    // return () => { (mounted = false); };
  }, []);

  return (
    <div>
      <div>
        <div className='Summary'>
          <h2>Title</h2>
          <p>description</p>
        </div>
        <video
          autoPlay
          loop
          muted
          width="540"
          height="100%"
          id="video"
        >
          <source src={Video} type="video/mp4" />
        </video>
      </div>

      <div>
        <p>La liste des formations: </p>
      </div>
      <Posts posts={posts} />
    </div>
  );
}