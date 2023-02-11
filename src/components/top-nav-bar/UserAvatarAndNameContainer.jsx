import UserAvatar from "./UserAvatar";
import { Link } from "react-router-dom";

import styles from './userAvatarAndNameContainer.module.css'

const UserAvatarAndNameContainer = () => {
  return ( 
    
      <div className={styles['avatar-and-name-container']}>
        
          <UserAvatar/>
          <Link to={'./hidden-page'}>
            <h3 className={styles.username}>Elochukwu Aroh</h3>  
          </Link>    

      </div> 
    
    
   );
}
 
export default UserAvatarAndNameContainer;