import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd';


import eloPicture from '../../assets/user-images/professional-pic.jpeg';

const { Meta } = Card;

const AboutPage = () => {
  return ( 
    <React.Fragment>
      <Card
        style={{width: 300 , top: '2em' , margin: 'auto'}}
        cover={
          <img
            alt="Elochukwu Aroh"
            src={eloPicture}
          />
         }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          
          title="About"
          description="Hello there! My Name is Elochukwu Aroh. I am Software Developer passionate about stamping my feet in the sands of time in my own little way, for fun I like board games, table tennis and soccer. Thanks for stopping by!"
        />
      </Card>
      
      

    </React.Fragment>
    
    
    
   );
}
 
export default AboutPage;