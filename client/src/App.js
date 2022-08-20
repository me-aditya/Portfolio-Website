import React from 'react';
import Header from './components/Header';

import {BrowserRouter, Route, Routes } from 'react-router-dom' ;
import Certificates from './Pages/Certificates';
import AboutAndSkills from './Pages/AboutAndSkills';
import Education from './Pages/Education';
import Profiles from './Pages/Profiles';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/certificates" element={<Certificates/>}/>
              <Route path="/aboutAndSkills" element={<AboutAndSkills/>}/>
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
