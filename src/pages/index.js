import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './index.module.css'
import styled from 'styled-components';
import '../components/base.css'

const SetImg = styled(Img)`
  display: block;
  min-height: 100%;
`;

class RootIndex extends React.Component {


  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulArticle.edges')
    const logoLarge = get(this, 'props.data.allContentfulBranding.edges.0.node.logoLarge.fluid')

    return (
      <div className={styles.indexWrapper}>
      <div className={styles.statement}>i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      </div>
        <Helmet title={siteTitle} />

        <div className={styles.wrapper}>
            <div className={styles.leftHalf}>
              <div className={styles.preview}>
                <Link to={`/art/${posts[0].node.slug}`} className={styles.videoLink}>
                <div className={styles.videoOverlay}></div>
                <div className={styles.videoBorder}></div>
                <div className={styles.previewName}>{posts[0].node.artistName}</div>
                <div className={styles.previewQuote}>“{posts[0].node.titleQuote.childMarkdownRemark.excerpt}”</div>

                <video autoPlay muted loop>
                  <source src={posts[0].node.heroVideo.file.url} />
                </video>
                </Link>
              </div>

              <div className={styles.infoLinks}>
                <div style={{paddingBottom: "8px"}}>
                we profile art perspectives @ Art-Discontent
                </div>
                <div>
                  <Link to={`/art/`} className={styles.infoLink}><span>Art</span></Link>
                  <Link to={`/about/`} className={styles.infoLink}><span>About</span></Link>
                  <Link to={`/contact/`} className={styles.infoLink}><span>Contact</span></Link>
                </div>
              </div>
            </div>

            <div className={styles.rightHalf}>
              <Img fluid={logoLarge} className={styles.logo} imgStyle={{ objectFit: 'contain' }}/>
              <Link to={`/art/`} className={styles.artPgLink}> &gt;&gt; More Articles </Link>
              <div className={styles.postsWrapper}>
              {posts.map(({ node }) => {
                return (
                  <Link className={styles.imagePreview} key={node.slug} to={`/art/${node.slug}`}>
                    <div className={styles.overlay}></div>
                    <SetImg alt={node.carouselImage.title}
                    fluid={node.carouselImage.fluid} />
                  </Link>
                )
              })}
              </div>
            </div>
        </div>

      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulArticle(limit: 3, sort: {fields: publishDate, order: DESC}) {
      edges {
        node {
          slug
          artistName
          carouselImage{
            title
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid
            }
          }
          titleQuote {
            childMarkdownRemark {
              excerpt
            }
          }
          heroVideo {
            file {
              url
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
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid
            }
          }
        }
    }
  }
}
`
