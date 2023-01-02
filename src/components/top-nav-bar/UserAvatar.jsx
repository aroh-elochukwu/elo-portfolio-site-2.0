import React from 'react';
import { Avatar } from 'antd';

import eloPic from '../../assets/user-images/elo-avatar.jpg'

const UserAvatar = () => {
  return ( 
    <div>
      <Avatar src={eloPic}  size="large" />
    </div>
   );
}
 
export default UserAvatar;