/*from the default gatsby starter blog*/

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <h3 className={styles.previewTitle}>
      <Link to={`/art/${article.slug}`}>{article.artistName}</Link>
    </h3>
  </div>
)
