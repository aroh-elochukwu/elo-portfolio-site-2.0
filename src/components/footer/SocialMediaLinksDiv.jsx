import React from 'react';
//import { Link } from "react-router-dom";
import {  GithubOutlined, LinkedinOutlined} from '@ant-design/icons';
import { Space } from 'antd';

import styles from './socialMediaLinksDiv.module.css';

const SocialMediaLinksDiv = () => {
  return (  
    <div>
      <Space>  
        <a href='https://github.com/aroh-elochukwu'>
          <GithubOutlined className={styles['logo-link']}/>     
        </a>  
        <a href='https://linkedin.com/in/elochukwu-aroh-b5a71617b'>
          <LinkedinOutlined className={styles['logo-link']}/>
        </a>               
        
      </Space>
      
    </div>
  );
}
 
export default SocialMediaLinksDiv;