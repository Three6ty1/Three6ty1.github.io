import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Fragment } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
        </style>
      </head>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path='/Page' element={<Home />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
