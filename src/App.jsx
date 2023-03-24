import './App.css';
import './assets/style.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import Formations from './pages/Formations/Formations';
import Contact from './pages/Contact';
// import Formationpage from './pages/Formationpage';

function App() {
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
    </BrowserRouter>
  );
}

export default App;
