import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import Img from 'gatsby-image'

const Navigation = (props) => {
  return (
  <div className={styles.navigation}>
    <Link className={styles.logo} to={`/`}>
      <Img fixed={props.logo.fixed} />
    </Link>
  </div>
  )
}

export default Navigation;
