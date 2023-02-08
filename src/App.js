import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/main.css';


import NavBar from './compontnts/navBar/NavBar';
import Footer from './compontnts/footer/Footer';
import Home from './home/Home';

import Contacts from './home/Contacts';
import Projects from './home/Projects';
import Project from './home/Project.jsx';
import ScrollToTop from './utils/ScrollToTop';

function App() {

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<Project />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>




        <Footer />
      </Router>
    </div>
  );
}

export default App;
