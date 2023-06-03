import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Fragment } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <HelmetProvider>
          <Helmet>
            <title>Three6ty1's Page</title>
            <meta name='Three6ty1s Page'/>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');
            </style>
          </Helmet>
        </HelmetProvider>
        <Navbar />
        <Routes>
          <Route path='/Page' element={<Home />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
