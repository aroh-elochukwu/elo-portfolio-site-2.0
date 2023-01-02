import React from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import resume from '../../assets/files/Aroh-Elochukwu-resume.pdf'

const AboutPage = () => {
  return ( 
    <React.Fragment>
      <h3>Page build in progress, would be available shortly</h3>
      <p>Please note that the download button below is a personal file sharing resource and you should only click if instructed so, thank you.</p>
      <Button href={resume} style={{width:'10em'}} type="primary" icon={<DownloadOutlined />} size='large'>
        Download
      </Button>

    </React.Fragment>
    
    
    
   );
}
 
export default AboutPage;