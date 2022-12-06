import React from 'react';
/* import React-router-dom */ 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* import Navbar */
import Navbar from './components/Navbar';

/* import pages */ 
import Home from './pages/Home';
import Equipe from './pages/Equipe';
import Maison from './pages/Maison';
import Contact from './pages/Contact';
import Produits from './pages/Produits';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            
            <Route path='*' element={<Home />} />
            <Route path='/' element={<Home />} />

            <Route path='/equipe' element={<Equipe />} />
            <Route path='/maison' element={<Maison />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/produits' element={<Produits />} />


          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;