import React from 'react';
import { Menu } from 'antd';

import styles from './menuBar.module.css'

const MenuBar = () => {
  
  const menuOptions = [
    {name: 'Home', id: 0},
    {name: 'About', id: 1},
    {name: 'Projects', id: 2},
    {name: 'Contact', id: 3}    
  ];

  return (
    <Menu 
      className={styles['top-nav-menu'] }
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['0']}   
      items={menuOptions.map((option) => {
        return {
          key: option.id,
          label: option.name
        };
        
      })}
    />
        
    );
}
 
export default MenuBar;