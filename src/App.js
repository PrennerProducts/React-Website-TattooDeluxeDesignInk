import './App.css';
import React from 'react';
import MyNavbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" exact component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
