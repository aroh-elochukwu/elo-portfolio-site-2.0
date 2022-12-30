import React from 'react';
import { Layout} from 'antd';

import styles from './mainSection.module.css'
const { Content } = Layout;

const MainSection = () => {
  return ( 
    <Content >
      <div className={styles['main-section-inner-container']}>
        Content
      </div>      

    </Content>
   );
}
 
export default MainSection;