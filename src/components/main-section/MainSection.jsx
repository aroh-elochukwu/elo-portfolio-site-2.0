import React from 'react';
import { Layout} from 'antd';
const { Content } = Layout;

const MainSection = () => {
  return ( 
    <Content
        style={{
          padding: '0 50px', 
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: 'white', minHeight: '76vh'
          }}
        >
          Content
        </div>

      </Content>
   );
}
 
export default MainSection;