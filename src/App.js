import React from 'react';
import './styles/main.css';




import NavBar from './compontnts/navBar/NavBar';
import Footer from './compontnts/footer/Footer';
import Home from './home/Home';

import Contacts from './home/Contacts';
import Projects from './home/Projects';
import ProjectPage from './home/ProjectPage';

function App() {
  return (
    <div className="App">
      <NavBar />

      {/* <Home /> */}
      {/* <Projects /> */}
      {/* <Contacts /> */}
      <ProjectPage />
      <Footer />


    </div>
  );
}

export default App;
