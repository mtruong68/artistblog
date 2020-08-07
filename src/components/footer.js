import React from 'react'
import { Link } from 'gatsby'

import styles from './footer.module.css'

const Footer = (props) => {
  return(
    <div className={styles.footer}>
      <span><Link className={styles.footerLink} to={`/`}>Home</Link></span>
      <span><Link className={styles.footerLink} to={`/art`}>Art</Link></span>
      <span><Link className={styles.footerLink} to={`/about`}>About</Link></span>
      <span>Created by&nbsp;<a className={styles.footerLink} href="http://marytruong.com">Mary Truong</a></span>
    </div>
  )
}

export default Footer;
