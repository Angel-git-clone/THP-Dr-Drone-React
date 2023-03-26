import './Formations.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Video from '../../assets/trailer-Dr-drone-def.mp4';
import Posts from '../Posts/posts';

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
    <div style={{ marginBottom: '4em' }}>
      <div className="Presentation">
        <details open className="Summary">
          <summary style={{ color: 'deeppink', fontWeight: 'bold' }}>Nos formations</summary>
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
      <h3 style={{ color: 'black', textAlign: 'center' }}>
        <stong style={{ color: 'deeppink' }}>Notre priorité : </stong>
        Exercer avec le plus grand respect des normes de sécurité !
      </h3>
      <div className="wrapper1" style={{ marginTop: '2em', marginBottom: '2em' }}>
        <div className="wrapper2">
          <strong className="TitlePost">La liste des formations : </strong>
          <div className="Posts">
            <Posts posts={posts} />
          </div>
        </div>
        <div className="CategoryPostGroup">
          <strong>La liste des catégories : </strong>
          <p className="CategoryPost">
            Catégorie 1 : "Technique"
          </p>
          <p className="CategoryPost">
            Catégorie 2 : "Commercial"
          </p>
          <p className="CategoryPost">
            Catégorie 3 : "Administratif"
          </p>
        </div>
      </div>
    </div>
  );
}
