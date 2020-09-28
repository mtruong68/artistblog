import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'

import styles from './404.module.css'

class AboutPage extends React.Component {
  render() {
    const siteMetadata = get(this, 'props.data.site.siteMetadata')

    return(
      <div className={styles.errorPage}>
      <Helmet title={`About | ${siteMetadata.title}`}>
      <link rel="icon" type="image/png"
      href={`${siteMetadata.favicon}`}
      sizes="16x16"/>
      </Helmet>

      <div>
      404 Error!
      </div>
      <div>
      This link doesn't go anywhere :'(
      </div>
      Try these other Art-Discontent links:

      <Link to={`/`} className={styles.link}>
        Home
      </Link>
      <Link to={`/art`} className={styles.link}>
        Art
      </Link>


      </div>
    )
  }
}

export const pageQuery = graphql`
  query ErrorPageQuery {
  site {
    siteMetadata{
      title
      favicon
      logoLarge
    }
  }
}
`

export default AboutPage
