import React from 'react';
import { Descriptions } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import image from '../../assets/user-images/elo-avatar.jpg'

const ProjectsPage = () => {
  return (
    <div style={{marginLeft:'2em', marginRight:'2em'}}>
      <h2 style={{ textAlign:'center', textTransform:'uppercase', color:'grey'}}>Projects Page</h2>
      <p style={{marginBottom:'2.5em'}}>Please note that all projects are embedded with redirecting links to these projects for your personal observations and viewing pleasure.</p>
      <p></p>
      <Descriptions  bordered title="Elo-TV">
        <Descriptions.Item label="Logo"><Avatar shape="square" src={image} size={64} icon={<UserOutlined />} /></Descriptions.Item>
        
        <Descriptions.Item label="Built with">React.js</Descriptions.Item>
        <Descriptions.Item label="Build Partners">None</Descriptions.Item>
        <Descriptions.Item label="API Mentions">The Movies Database API</Descriptions.Item>
        <Descriptions.Item label="Project Description">
          An Application displaying the most popular shows on some of the worlds largest streaming site using the movies database API
          
        </Descriptions.Item>
        
     </Descriptions>

    </div>

    
    
    );
}
 
export default ProjectsPage;