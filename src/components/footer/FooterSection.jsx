import React from 'react';
import {Layout} from 'antd';

import SocialMediaLinksDiv from './SocialMediaLinksDiv';
import styles from './footerSection.module.css';

const { Footer } = Layout;

const FooterSection = () => {
  return ( 
    <Footer style={{textAlign:'center', display:'flex', justifyContent:'space-between'}}>
      <SocialMediaLinksDiv/>
      <h4 className={styles['footer-side-text']}>Powered with React.js, cuz I love it</h4>
      
    </Footer>
   );
}
 
export default FooterSection;