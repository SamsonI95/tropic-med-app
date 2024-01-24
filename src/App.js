//App
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import NavBar from './components/Reusables/NavBar';
import Footer from './components/Reusables/Footer';
import Home from './components/pages/Home';

//Icon components
import { setupIonicReact } from '@ionic/react';

//Styles
import './App.css'
import '@ionic/react/css/core.css';
;

setupIonicReact();

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
