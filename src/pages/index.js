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
  constructor(props){
    super(props);
    this.timer= null;
    this.state = {
      currNode: 0,
    }

    this.resetArticlePreview = this.resetArticlePreview.bind(this);
  }

  componentWillUnmount(){
    clearTimeout(this.timer);
  }

  previewArticle(i){
    const posts = get(this, 'props.data.allContentfulArticle.edges');
    if (i !== this.state.currNode){
      this.setState((state) => {
        state.currNode = i;
      });
      document.getElementById('videoOverlay').style.opacity = 1;
      document.getElementById('videoBorder').style.opacity = 0;
      document.getElementById('previewName').style.opacity = 1;

      this.timer = setTimeout(function(){
        document.getElementById('videoOverlay').style.opacity = 0;
        document.getElementById('videoBorder').style.opacity = 0;
        document.getElementById('previewName').innerText = posts[i].node.artistName;
        document.getElementById('previewQuote').innerText = `“${posts[i].node.titleQuote.childMarkdownRemark.excerpt}”`;
        document.getElementById('previewVideo').src = posts[i].node.heroVideo.file.url;
        document.getElementById('videoStill').src = posts[i].node.videoStill.file.url;
      }, 200);
    } else {
      document.getElementById('videoOverlay').style.opacity = 0;
      document.getElementById('videoBorder').style.opacity = 0;
      document.getElementById('previewName').style.opacity = 1;
    }
  }

  articleEmph(){
    document.getElementById('videoBorder').style.opacity = 0;
    document.getElementById('videoOverlay').style.opacity = 0;
    document.getElementById('previewName').style.opacity = 1;
  }

  resetArticlePreview(){
    document.getElementById('videoBorder').style.opacity = 1;
    document.getElementById('videoOverlay').style.opacity = .2;
    document.getElementById('previewName').style.opacity = .8;

    this.timer = setTimeout(function(){
      document.getElementById('videoBorder').style.opacity = 1;
      document.getElementById('videoOverlay').style.opacity = .2;
      document.getElementById('previewName').style.opacity = .8;
    }, 200);
  }

  render() {

    const siteMetadata = get(this, 'props.data.site.siteMetadata')
    const posts = get(this, 'props.data.allContentfulArticle.edges')

    return (
      <div className={styles.indexWrapper}>
      <div className={styles.statement}>i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i want a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i want a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i want a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i want a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i want a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i want a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i want a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i want a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i want a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i want a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a queer art i want a cold art i want a dead art
      i want a new art i want a Black art i want a silent art i want a violent art
      i want a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a new art i want a Black art i want a silent art i want a violent art
      i want a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a new art i want a Black art i want a silent art i want a violent art
      i want a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a new art i want a Black art i want a silent art i want a violent art
      i want a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a new art i want a Black art i want a silent art i want a violent art
      i want a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      i want a new art i want a Black art i want a silent art i want a violent art
      i want a revolutionary art i want a hearing art i want a crip art i want a gentle art
      i want a genital art i want a transparent art i want a difficult art i want an
      impossible art i want an art that can kill, that can kill, that can kill, kill, kill
      </div>
        <Helmet title={siteMetadata.title} >
        <link rel="icon" type="image/png"
        href={siteMetadata.favicon}
        sizes="16x16"
        />
        </Helmet>

        <div className={styles.wrapper}>
            <div className={styles.leftHalf}>
              <div className={styles.preview}>
                <Link to={`/art/${posts[0].node.slug}`}
                className={styles.videoLink}
                onMouseEnter={this.articleEmph}
                onMouseLeave={this.resetArticlePreview}>

                <video className={styles.video} id="previewVideo" autoPlay muted loop>
                  <source src={posts[0].node.heroVideo.file.url} />
                </video>

                <img alt="article preview" id="videoStill" className={styles.videoStill} src={posts[0].node.videoStill.file.url} />

                <div id="previewName" className={styles.previewName}>{posts[0].node.artistName}</div>
                <div id="previewQuote" className={styles.previewQuote}>“{posts[0].node.titleQuote.childMarkdownRemark.excerpt}”</div>
                <div id="videoOverlay" className={styles.videoOverlay}></div>
                <div id="videoBorder" className={styles.videoBorder}></div>
                </Link>
              </div>

              <div className={styles.infoLinks}>
                <div style={{paddingBottom: "8px"}}>
                we profile art perspectives @ Art-Discontent
                </div>
                <div>
                  <Link to={`/art/`} className={styles.infoLink}><span>Art</span></Link>
                  <Link to={`/about/`} className={styles.infoLink}><span>About</span></Link>
                </div>
              </div>
            </div>

            <div className={styles.rightHalf}>
              <img className={styles.logo} src={`${siteMetadata.logoLarge}`} alt="logo_large" />
              <Link to={`/art/`} className={styles.artPgLink}> &gt;&gt; More Articles </Link>
              <div className={styles.infoLinksMobile}>
                <div style={{paddingBottom: "8px"}}>
                we profile art perspectives @ Art-Discontent
                </div>
                <div>
                  <Link to={`/art/`} className={styles.infoLink}><span>Art</span></Link>
                  <Link to={`/about/`} className={styles.infoLink}><span>About</span></Link>
                </div>
              </div>
              <div className={styles.postsWrapper}>
              {posts.map(({ node }, i) => {
                return (
                  <Link className={styles.imagePreview}
                  key={node.slug}
                  to={`/art/${node.slug}`}
                  onMouseEnter={this.previewArticle.bind(this, i)}
                  onMouseLeave={this.resetArticlePreview}>
                    <div className={styles.overlay}></div>
                    <div className = {styles.overlayArtistName}>
                      {node.artistName}
                    </div>
                    <div className= {styles.overlayTitleQuote}>
                      {node.titleQuote.childMarkdownRemark.excerpt}
                    </div>
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
          videoStill{
            file {
              url
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
