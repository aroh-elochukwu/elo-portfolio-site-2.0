import React from 'react'
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import resume from '../../assets/files/Aroh-Elochukwu-resume.pdf'



export default function HiddenPage() {
  return (
    
    <React.Fragment>
      <p>Please note that the download button below is a personal file sharing resource and you should only click if instructed so, thank you.</p>
      <Button href={resume} style={{width:'10em'}} type="primary" icon={<DownloadOutlined />} size='large'>
        Download
      </Button>
    </React.Fragment>
  )
}
