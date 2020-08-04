import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './art.module.css'
import styled from 'styled-components';

const SetImg = styled(Img)`
  display: block;
  flex-grow: 1;
`;

class ArtPage extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulArticle.edges')
    const logoLarge = get(this, 'props.data.allContentfulBranding.edges[0].node.logoLarge.fixed')

    return (
      <div>
      <div>
        <Link to={`/`}>
        <Img fixed={logoLarge} />
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
    allContentfulBranding{
      edges{
        node{
          logo{
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid
            }
          }
          logoLarge{
            fixed(width: 200) {
              ...GatsbyContentfulFixed
            }
          }
        }
    }
  }
}
`
