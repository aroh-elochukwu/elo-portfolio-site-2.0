import React from 'react';
import { Card} from 'antd';
import { Link } from 'react-router-dom';

import { Button, Layout} from 'antd';

import styles from './homePage.module.css'
const { Content } = Layout;

const HomePage = () => {
  return ( 
    <Content >
      <div className={styles['main-section-container']}>
        <div className={styles['main-section-inner-container']}>
          <div className={styles['stack-outer-container']} >

            <Card title="Tech Stack Arsenal" bordered={false}>
              <div className={styles['stack-inner-container']}>              
                <p className={styles['stack-option']}>React.Js</p>
                <p className={styles['stack-option']}>ASP.Net Core</p>
                <p className={styles['stack-option']}>Node.js</p>
                <p className={styles['stack-option']}>MS SQL Server </p>
                <p className={styles['stack-option']}>Git</p>
              </div>
            </Card>           

          </div>
          
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