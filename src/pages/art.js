import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Footer from '../components/footer'

import styles from './art.module.css'
import styled from 'styled-components';

const SetImg = styled(Img)`
  display: block;
  flex-grow: 1;
  max-height: 240px;
`;

class ArtPage extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulArticle.edges')
    const siteMetadata = get(this, 'props.data.site.siteMetadata')

    return (
      <div>
        <Helmet title={`Art | ${siteMetadata.title}`}>
          <link rel="icon" type="image/png"
          href={`${siteMetadata.favicon}`}
          sizes="16x16"/>
        </Helmet>
        <div className={styles.logoWrapper}>
          <Link to={`/`}>
            <img alt="logo_large" src={`${siteMetadata.logoLarge}`} />
          </Link>
        </div>
          <div className={styles.articleList}>
            {posts.map(({ node }) => {
              return (
                <Link to={`/art/${node.slug}`} key={`${node.slug}`}className={styles.articleContainer}>
                  <div className={styles.imgWrapper}>
                    <SetImg
                    alt={node.carouselImage.title}
                    fluid={node.carouselImage.fluid}
                    imgStyle={{ objectFit: 'contain' }} />
                  </div>
                  <div className={styles.artistName}>{node.artistName}</div>
                  <div className={styles.titleQuote}>{node.titleQuote.childMarkdownRemark.excerpt}</div>
                </Link>
              )
            })}
          </div>
          <Footer />
      </div>
    )
  }
}

export default ArtPage

export const pageQuery = graphql`
  query ArtHomeQuery {
    allContentfulArticle {
      edges {
        node {
          artistName
          titleQuote {
            childMarkdownRemark {
              excerpt
            }
          }
          slug
          carouselImage{
            title
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  site {
    siteMetadata{
      title
      favicon
      logoLarge
    }
  }
}
`
