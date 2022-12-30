import React from 'react';
import {  GithubOutlined, LinkedinOutlined} from '@ant-design/icons';
import { Space } from 'antd';

import styles from './socialMediaLinksDiv.module.css';

const SocialMediaLinksDiv = () => {
  return (  
    <div>
      <Space>
        <GithubOutlined className={styles['logo-link']}/>
        <LinkedinOutlined className={styles['logo-link']}/>
      </Space>
      
    </div>
  );
}
 
export default SocialMediaLinksDiv;