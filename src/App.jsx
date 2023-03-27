import './App.css';
import './assets/style.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import Formations from './pages/Formations/Formations';

// import Formationpage from './pages/Formationpage';
// ↳ la futur page de chaque formation

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/formations" element={<Formations />}/>
        {/* <Route path='/formation/:id' element={<Formationpage />}/> */}
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
