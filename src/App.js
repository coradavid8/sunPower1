import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CasaVerde from './pages/CasaVerde';
import Contact from './pages/Contact';
import Page404 from './pages/Page404';
import Produse from './pages/Produse';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/despre-noi" element={<About />} />
        <Route path="/casa-verde" element={<CasaVerde />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/produse' element={<Produse/>}/>
        <Route path="/page404" element={<Page404 />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
