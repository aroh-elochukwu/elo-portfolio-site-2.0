import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';

import TopNav from "./components/top-nav-bar/TopNav";
import HomePage from './components/main-section/HomePage';
import AboutPage from './components/main-section/AboutPage';
import ProjectsPage from './components/main-section/ProjectsPage'
import FooterSection from './components/footer/FooterSection';
import HiddenPage from './components/main-section/HiddenPage';

function App() {
  return (
    <Router>
      <Layout >
        <TopNav/>
        <Routes>
          <Route element={<HomePage/>} path='/'/>
          <Route element={<AboutPage/>} path='/about-page'/>
          <Route element={<ProjectsPage/>} path='/projects-page'/>
          <Route element={<HiddenPage/>} path='/hidden-page'/>
        </Routes>       
        
        <FooterSection/>
      </Layout> 
    </Router>
     
    
  );
}

export default App;
