import React from 'react';
import { Layout } from 'antd';

import TopNav from "./components/top-nav-bar/TopNav";
import MainSection from './components/main-section-home/MainSection';
import FooterSection from './components/footer/FooterSection';

function App() {
  return (
    <Layout >
      <TopNav/>
      <MainSection/>
      <FooterSection/>
    </Layout>  
    
  );
}

export default App;
