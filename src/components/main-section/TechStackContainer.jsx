import React from "react";
import { Card } from "antd";

import styles from './techStackContainer.module.css';

const TechStackContainer = () => {
  return (
    <div className={styles['stack-outer-container']} >

      <Card title="Tech Stack Arsenal" bordered={false}>
        <div className={styles['stack-inner-container']}>              
          <p className={styles['stack-option']}>React.js</p>
          <p className={styles['stack-option']}>Angular.js</p>
          <p className={styles['stack-option']}>C#</p>
          <p className={styles['stack-option']}>ASP.Net Core</p>
          <p className={styles['stack-option']}>Node.js</p>
          <p className={styles['stack-option']}>MS SQL Server </p>
          <p className={styles['stack-option']}>Git</p>
        </div>
      </Card>           

    </div>
    );
}
 
export default TechStackContainer;