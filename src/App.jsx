import './App.css';
import './assets/style.css';
import { useEffect, useState } from 'react';

import Axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

import Posts from './pages/posts';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Homepage';
import Footer from './components/Footer/Footer';
import BackgroundImage from './assets/Background.png';
// import Formations from './pages/Formations';

const API_URL = 'https://backend-drdrone.herokuapp.com/api/posts';

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
      {/* <div style={{ backgroundImage:`url(${BackgroundImage})`, backgroundSize: 'contain',backgroundRepeat: 'no-repeat'}}> */}
        <Navbar />
        <Home />
        <Footer />
        {/* <Formations />  */}
      {/* </div> */}
      {/* <Authenform /> */}
      {/* <Header /> */}
      {/* <Posts posts={posts} /> */}
    </BrowserRouter>
  );
}

export default App;
