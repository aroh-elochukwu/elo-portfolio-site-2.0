import UserAvatar from "./UserAvatar";

import styles from './userAvatarAndNameContainer.module.css'

const UserAvatarAndNameContainer = () => {
  return ( 
    <div className={styles['avatar-and-name-container']}>
        <UserAvatar/>
        <h3 className={styles.username}>Elochukwu Aroh</h3>      

      </div> 
   );
}
 
export default UserAvatarAndNameContainer;