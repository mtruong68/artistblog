import React from 'react'
import { Link } from 'gatsby'

import styles from './article-header.module.css'

const ArticleHeader = ({ titleQuote, video, color }) => {
  return (
    <div>
      <video autoPlay muted loop className={styles.headerVideo}
      style={{backgrond: color[1]}}>
        <source src={video} />
      </video>
      <div className={styles.foreground}>
        <div className={styles.titleQuote}
        style={{ background: color[2],
        color: color[3] }}>
          “{titleQuote}”
        </div>
        <div className={styles.squiggleOuterWrapper}>
          <div className={styles.squiggleWrapper}>
            <div className={styles.squiggle}></div>
          </div>
        </div>
        <button className={styles.headerButton}>
          <span className="material-icons">expand_more</span>
        </button>
      </div>
    </div>
  )
}

export default ArticleHeader;
