import React from 'react';
import {  Routes, Route,} from 'react-router-dom';
import Home from './Home'
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';

const AppRoutes = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     {/* */}
    //     <Route path="/resume" element={<Resume />} />
    //     
        // {/* <Route path="/contact" element={<Contact />} /> */}
    //   </Routes>
    // </Router>

    <>
    
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} /> 
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} /> 
    </Routes>
    </>
  );
};

export default AppRoutes;
