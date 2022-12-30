import React from 'react';
import {  GithubOutlined, LinkedinOutlined} from '@ant-design/icons';
import { Space } from 'antd';

const SocialMediaLinksDiv = () => {
  return (  
    <div>
      <Space>
        <GithubOutlined />
        <LinkedinOutlined />
      </Space>
      
    </div>
  );
}
 
export default SocialMediaLinksDiv;