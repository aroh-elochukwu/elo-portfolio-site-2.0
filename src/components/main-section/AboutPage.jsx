import React from 'react';
//import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
//import { Card } from 'antd';

import {
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import { Image, Space } from 'antd';
import { Divider } from 'antd';

import styles from './aboutPage.module.css'
import eloPicture from '../../assets/user-images/professional-pic.jpeg';

//const { Meta } = Card;

const AboutPage = () => {
  return ( 
    <React.Fragment>
      <div className={styles['professional-summary-container']}>

        <Image
          width={400}
          alt='Elochukwu Aroh professional Picture'              
          src={eloPicture}
          preview={{
            toolbarRender: (
              _,
              {
                transform: { scale },
                actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
              },
            ) => (
              <Space size={12} className="toolbar-wrapper">              
                <SwapOutlined rotate={90} onClick={onFlipY} />
                <SwapOutlined onClick={onFlipX} />
                <RotateLeftOutlined onClick={onRotateLeft} />
                <RotateRightOutlined onClick={onRotateRight} />
                <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
              </Space>
            ),
          }}
        />

      
        <>
          <Divider >Professional Summary</Divider>
          <p>
          Results-driven and highly skilled Full-Stack Software Developer with proven expertise in designing, developing, and deploying cutting-edge web applications and software solutions. Proficient in a wide range of programming languages and frameworks, I am dedicated to delivering robust, scalable, and user-centric solutions that exceed client expectations.
          </p>

          <Divider orientation="left">Key Strengths</Divider>
          <p>
            Full-Stack Proficiency: <em>Demonstrated ability to work seamlessly across front-end and back-end technologies, ensuring cohesive and efficient application development. </em>       
          </p>
          <p>
            Web Application Development:<em> Adept at creating responsive and intuitive web applications using HTML, CSS, JavaScript, and modern front-end frameworks such as React and Angular, React Native, Next.js, TypeScript.</em>
          </p>
          <p>
            Back-End Development: <em>Skilled in building robust back-end systems using Node.js, Express, MongoDB, Apache, ASP. NET Core, or other frameworks to handle data storage, API integration, and business logic.</em>
          </p>
          <p>
            Database Management: <em>Experience in designing and implementing databases, including SQL and NoSQL solutions, to ensure data integrity and efficient query performance.</em>
          </p>
          <p>
            Version Control and Deployment:<em> Proficient in utilizing Git for version control and deploying applications on cloud platforms like AWS or Azure.</em>
          </p>
          <p>
            Problem Solving and Troubleshooting:<em> Strong analytical skills, enabling the identification and resolution of complex technical challenges effectively.</em>
          </p>
          <p>
            Agile Development Methodologies:<em> Experience working in Agile environments, delivering high-quality code in fast-paced, collaborative teams.</em>
          </p>

          <Divider orientation="left">Education</Divider>
          <p>BSc Computer Science - <em>Benson Idahosa University, Benin City, Nigeria</em></p>
          <p>Diploma Software Development - <em>Manitoba Institute of Trades and Technology</em></p>


        </>

      </div>

      



      
      {/* <Card
        style={{width: 300 , top: '2em', marginBottom:'4em' , margin: 'auto'}}
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
      </Card>      */}
      

    </React.Fragment>
    
    
    
   );
}
 
export default AboutPage;