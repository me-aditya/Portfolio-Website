import React from 'react';
import Header from './components/Header';
import {BrowserRouter, Route, Routes } from 'react-router-dom' ;
import Certificates from './Pages/Certificates';
import Education from './Pages/Education';
import Profiles from './Pages/Profiles';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Experience from './Pages/Experience';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/certificates" element={<Certificates/>}/>
              <Route path="/Experience" element={<Experience/>}/>
              <Route path="/education" element={<Education/>}/>
              <Route path="/profiles" element={<Profiles/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
