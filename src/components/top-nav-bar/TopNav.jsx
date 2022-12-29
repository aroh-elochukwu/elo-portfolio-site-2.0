import React from 'react';
import { Layout } from 'antd';

import MenuBar from './MenuBar';
import UserAvatarAndNameContainer from './UserAvatarAndNameContainer';
import styles from './topNav.module.css'

const { Header } = Layout;

const TopNav = () => {

  return ( 
    <Header className={styles['top-nav-container']}>
      <UserAvatarAndNameContainer/>
      <MenuBar/>          

    </Header>
   );
}
 
export default TopNav;