import './App.css';
import './assets/style.css';
import { useEffect, useState } from 'react';

import Axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Posts from './pages/posts';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import Formations from './pages/Formations/Formations';
import Contact from './pages/Contact';
// import Formationpage from './pages/Formationpage';

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
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/formations' element={<Formations />}/>
          {/* <Route path='/formation/:id' element={<Formationpage />}/> */}
          <Route path='/contact' element={<Contact />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
        <Footer />
      {/* <Posts posts={posts} /> */}
    </BrowserRouter>
  );
}

export default App;
