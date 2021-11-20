import React from 'react';
import styles from './Notifications.module.css';
import NotificationsIcon from './Notificationsicon';
import SearchIcon from './Notificationsicon';

const Notifications = () => {

    return (
        <div className={styles.notifications}>
            <NotificationsIcon />
        </div>
    );
};

export default Notifications;