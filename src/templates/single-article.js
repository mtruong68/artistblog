import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'

import styles from './single-article.module.css'

import ArticleHeader from '../components/article-header'
import ArticleBody from '../components/article-body'
import ArticleShare from '../components/article-share'
import ArticleCarousel from '../components/article-carousel'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class ArticleTemplate extends React.Component {
  componentDidMount(){
  }

  render() {
    const post = get(this.props, 'data.contentfulArticle')
    const carouselItems = (get(this.props, 'data.allContentfulArticle'))
    const siteMetadata = get(this.props, 'data.site.siteMetadata')

    if (!post){
      return(<div></div>)
    } else {

    const jsonText = JSON.stringify(post.content.json.content.map((x) => {
      if(x.nodeType === "paragraph"){
        return {type: x.nodeType, value: x.content}
      }
      else if(x.nodeType === "heading-2") {
        return {type: "heading-2", value: x.content[0].value}
      } else {
        return {type: "image", value: parseInt(x.content[0].value)}
      }
    }));

    return (
    <div>
    <Helmet title={`${post.artistName} | AD`}>
      <meta
      name='viewport'
      content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${post.artistName} | ${siteMetadata.title}`} />
      <meta name="twitter:description" content={`${post.titleQuote.childMarkdownRemark.excerpt}`} />
      <meta name="twitter:image" content={`https:${post.carouselImage.file.url}?w=500&q=100`} />
      <meta property="og:url" content={`${siteMetadata.siteUrl}/art/${post.slug}`} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`${post.artistName} | ${siteMetadata.title}`} />
      <meta property="og:description" content={`${post.titleQuote.childMarkdownRemark.excerpt}`} />
      <meta property="og:image" content={`https:${post.carouselImage.file.url}?w=500&q=100`} />
    </Helmet>
      <Navigation logo={siteMetadata.favicon}/>
      <div id="wrapper-parallax"
      className={styles.wrapperParallax}
      style={{ background: post.color[0] }}>
        <div id="header" className={styles.header}>
          <ArticleHeader
          videoStill={post.videoStill}
          titleQuote={post.titleQuote.childMarkdownRemark.excerpt}
          video={post.heroVideo.file.url}
          color={post.color}>
          </ArticleHeader>
        </div>

        <section id="content" className={styles.content}>
          <ArticleBody
          color = {post.color}
          artistName = {post.artistName}
          subQuote = {post.subquote.childMarkdownRemark.excerpt}
          author = {post.author}
          publishDate = {post.publishDate}
          articleText = {jsonText}
          images = {post.images}
          slug = {post.slug}
          artistSite = {post.artistSite}>
          </ArticleBody>

          <ArticleShare
          siteUrl = {siteMetadata.siteUrl}
          slug = {post.slug}
          color = {post.color[4]}
          hoverColor = {post.color[6]}
          >
          </ArticleShare>

          <ArticleCarousel deviceType="desktop"
          carouselItems = {carouselItems.edges}
          >
          </ArticleCarousel>

          <Footer/>

        </section>
      </div>
    </div>
    )
    }
  }
}

export default ArticleTemplate

export const articleQuery = graphql`
  query ArticleBySlug($slug: String!, $list: [String!]) {
    contentfulArticle(slug: { eq: $slug }) {
      artistName
      artistSite
      color
      author
      publishDate(formatString: "MMMM Do, YYYY")
      slug
      titleQuote {
        childMarkdownRemark {
          excerpt
        }
      }
      videoStill {
        fluid(maxWidth: 1200) {
          ...GatsbyContentfulFluid
        }
      }
      subquote {
        childMarkdownRemark {
          excerpt
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
      heroVideo {
        file {
          url
        }
      }
      content {
        content
        json
      }
      carouselImage{
        file{
          url
        }
      }
      images {
        title
        description
        fluid(maxWidth: 1200) {
          ...GatsbyContentfulFluid
        }
      },
    },
    allContentfulArticle(filter: {id: {in: $list}}){
      edges {
        node {
          slug
          titleQuote{
            childMarkdownRemark {
              excerpt
            }
          }
          carouselImage {
            fluid(maxHeight: 700) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    },
    site {
      siteMetadata{
        siteUrl
        title
        favicon
      }
    }
  }
`
