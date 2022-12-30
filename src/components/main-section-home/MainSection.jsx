import React from 'react';
import { Button, Layout} from 'antd';

import styles from './mainSection.module.css'
const { Content } = Layout;

const MainSection = () => {
  return ( 
    <Content >
      <div className={styles['main-section-container']}>
        <div className={styles['main-section-inner-container']}>
          <h1 className={styles['main-text']}>Hey, i'm Elochukwu Aroh</h1>
          <p className={styles['supporting-text']}>You want laser focus attention to detail with your projects?</p>
          <p className={styles['supporting-text']}>Well look no further!</p>
          <Button className={styles.button} type='primary'>Projects</Button>
        </div>        
      </div>      

    </Content>
   );
}
 
export default MainSection;