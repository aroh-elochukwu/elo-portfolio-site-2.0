import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout} from 'antd';

import TechStackContainer from './TechStackContainer';
import styles from './homePage.module.css'

const { Content } = Layout;

const HomePage = () => {
  return ( 
    <Content >
      <div className={styles['main-section-container']}>
        <div className={styles['main-section-inner-container']}>  
          <TechStackContainer/>            
          <h1 className={styles['main-text']}>Hey, i'm Elochukwu Aroh</h1>
          <p className={styles['supporting-text']}>You want laser focus attention to detail with your projects?</p>
          <p className={styles['supporting-text']}>Well look no further!</p>
          <Link to={'./projects-page'}>
            <Button className={styles.button} type='primary'>Projects</Button>
          </Link>
          
        </div>        
      </div>      

    </Content>
   );
}
 
export default HomePage;