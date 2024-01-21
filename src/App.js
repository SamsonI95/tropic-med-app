import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@ionic/react/css/core.css';
import { setupIonicReact } from '@ionic/react';
import './App.css';

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
