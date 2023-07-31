import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

import styles from './menuBar.module.css'

const MenuBar = () => {
  
  const menuOptions = [
    {name: 'Home', id: 0, link: './'},
    {name: 'About', id: 1, link: './about-page'},
    {name: 'Projects', id: 2, link: './projects-page'},
       
  ];

  return (
    <Menu 
      className={styles['top-nav-menu'] }
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['0']}   
      
    > 
      {menuOptions.map(option => {
        return (
          <Menu.Item key={option.id}>
            <Link to={option.link}>
              {option.name}
            </Link>
          </Menu.Item>
        )
      })}
    
    
    </Menu>
        
    );
}
 
export default MenuBar;