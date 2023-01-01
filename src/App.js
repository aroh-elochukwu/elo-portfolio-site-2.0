import React from 'react';
import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom';
import { Layout } from 'antd';

import TopNav from "./components/top-nav-bar/TopNav";
import HomePage from './components/main-section/HomePage';
import ProjectsPage from './components/main-section/ProjectsPage'
import FooterSection from './components/footer/FooterSection';

function App() {
  return (
    <Router>
      <Layout >
        <TopNav/>

        <Routes>
          <Route element={<HomePage/>} path='/'/>
          <Route element={<ProjectsPage/>} path='/projects-page'/>
        </Routes>
        
        
        <FooterSection/>
      </Layout> 
    </Router>
     
    
  );
}

export default App;
