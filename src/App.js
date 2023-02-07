import React from 'react';
import './styles/main.css';




import NavBar from './compontnts/navBar/NavBar';
import Footer from './compontnts/footer/Footer';
import Home from './home/Home';
import Project from './home/Project';
import Contacts from './home/Contacts';

function App() {
  return (
    <div className="App">
      <NavBar />

      {/* <Home /> */}
      {/* <Project /> */}
      <Contacts />
      <Footer />


    </div>
  );
}

export default App;
