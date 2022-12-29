import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import eloPic from '../../assets/user-images/elo-avatar.jpg'

const UserAvatar = () => {
  return ( 
    <div>
      <Avatar src={eloPic}  size="large" icon={<UserOutlined/>}/>
    </div>
   );
}
 
export default UserAvatar;