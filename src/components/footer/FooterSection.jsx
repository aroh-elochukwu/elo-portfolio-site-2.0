import React from 'react';
import {Layout} from 'antd';

import SocialMediaLinksDiv from './SocialMediaLinksDiv';
import styles from './footerSection.module.css';

const { Footer } = Layout;

const FooterSection = () => {
  return ( 
    <Footer className={styles['footer-section-container']}>
      <SocialMediaLinksDiv/>
      <p className={styles['footer-side-text']}>Powered with React.js, cuz I love it</p>
      
    </Footer>
   );
}
 
export default FooterSection;