import './App.css';
import './assets/style.css';
import { useEffect, useState } from 'react';

import Axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

import Posts from './pages/posts';
import Home from './pages/Homepage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const API_URL = 'http://localhost:3000/api/posts';

function getAPIData() {
  return Axios.get(API_URL).then((response) => response.data);
}

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setPosts(items);
      }
    });
    return () => { (mounted = false); };
  }, []);

  return (
    <BrowserRouter>
      <Home />
      <Header />
      <div className="App">
        <Posts posts={posts} />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
