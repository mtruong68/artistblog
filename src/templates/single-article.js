import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'

import styles from './single-article.module.css'

import ArticleHeader from '../components/article-header'
import ArticleBody from '../components/article-body'
import ArticleCarousel from '../components/article-carousel'

class ArticleTemplate extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      windowHeight: 0,
      heightDocument: 0
    }
  }
  componentDidMount() {
    this.setState(state => {
      state.windowHeight = window.outerHeight;
      state.heightDocument = state.windowHeight +
      document.getElementById('content').clientHeight
    })
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    var scroll = window.scrollY;
    document.getElementById('scroll-animate-main').style.top = `-${scroll}px`;
    document.getElementById('header').style.backgroundPositionY =
    `${50-(scroll * 100 / this.state.heightDocument)}%`;
   }

  render() {
    const post = get(this.props, 'data.contentfulArticle')
    const carouselItems = (get(this.props, 'data.allContentfulArticle'));

    const jsonText = JSON.stringify(post.content.json.content.map((x) => {
      if(x.nodeType === "paragraph"){
        return {type: x.nodeType, value: x.content[0].value}
      } else if(x.nodeType === "heading-2") {
        return {type: "heading-2", value: x.content[0].value}
      } else {
        return {type: "image", value: parseInt(x.content[0].value)}
      }
    }));

    return (

    <div id="scroll-animate-main" className={styles.scrollAnimateMain}>
      <Helmet title={`${post.artistName} | CE`} />
      <div id="wrapper-parallax" className={styles.wrapperParallax} style={{ background: post.color[0] }}>
        <div id="header" className={styles.header}>
          <ArticleHeader
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
          slug = {post.slug}>
          </ArticleBody>

          <ArticleCarousel deviceType="desktop"
          carouselItems = {carouselItems.edges}
          >
          </ArticleCarousel>

        </section>
      </div>
    </div>
    )
  }
}

export default ArticleTemplate

export const articleQuery = graphql`
  query ArticleBySlug($slug: String!, $list: [String!]) {
    contentfulArticle(slug: { eq: $slug }) {
      artistName
      color
      author
      publishDate(formatString: "MMMM Do, YYYY")
      slug
      titleQuote {
        childMarkdownRemark {
          excerpt
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
        json
      }
      images {
        title
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
    }
  }
`
