import './Formations.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Video from '../../assets/trailer-Dr-drone-def.mp4';
import Posts from '../posts';

const API_URL = 'https://backend-drdrone.herokuapp.com/api/posts';
// const API_URL = 'http://127.0.0.1:3000/api/posts'; //run in local

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
    getAPIData().then((items) => {
      setPosts(items);
    });
  }, []);

  return (
    <div>
      <div>
        <details open>
          <summary>Nos formations</summary>
          <ul>
            <li><a href="#1"> Démousser un toit </a></li>
            <li><a href="#2"> Nid de frelon </a></li>
            <li><a href="#3"> Chiffrer une toiture </a></li>
            <li><a href="#4"> Déclarer un chantier </a></li>
          </ul>
        </details>
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
        <Posts posts={posts} />
      </div>
    </div>
  );
}
