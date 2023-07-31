import UserAvatar from "./UserAvatar";
import { Link } from "react-router-dom";

import styles from './userAvatarAndNameContainer.module.css'

const UserAvatarAndNameContainer = () => {
  return ( 
    
      <div className={styles['avatar-and-name-container']}>
        <Link to={'./hidden-page'}>
          <UserAvatar/>  
        </Link>        
        <h3 className={styles.username}>Elochukwu Aroh</h3>              

      </div> 
    
    
   );
}
 
export default UserAvatarAndNameContainer;