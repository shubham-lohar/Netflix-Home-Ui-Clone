import React from 'react';
import styles from './SocialLinks.module.css';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import TwitterIcon from './TwitterIcon';
import YoutubeIcon from './YoutubeIcon';

const SocialLinks= () => {

    return( <div className={styles.sl}>
        <a href="Facebook.com"className={styles.iconLink}>
        <FacebookIcon/>
        </a>
         <a href="Instagram.com" className={styles.iconLink}>
        <InstagramIcon/>
        </a>
        <a href="Twitter.com" className={styles.iconLink}>
        <TwitterIcon/>
        </a>
        <a href="Youtube.com" className={styles.iconLink}>
        <YoutubeIcon/>
        </a>
        
        
        
    
    </div>
    )
};

export default SocialLinks;