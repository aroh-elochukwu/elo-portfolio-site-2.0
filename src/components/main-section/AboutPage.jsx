import React from 'react';
import { Avatar } from 'antd';

import eloPicture from '../../assets/user-images/professional-pic.jpeg';


const AboutPage = () => {
  return ( 
    <React.Fragment>
      <h3>Page build in progress, would be available shortly</h3>
      <Avatar
        size={{xxl: 200}}
        src= {eloPicture}
        
       />
      

    </React.Fragment>
    
    
    
   );
}
 
export default AboutPage;