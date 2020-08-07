import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

const Navigation = (props) => {
  return (
  <div className={styles.navigation}>
    <Link className={styles.logo} to={`/`}>
      <img src={`${props.logo}`} alt="logo" />
    </Link>
  </div>
  )
}

export default Navigation;
