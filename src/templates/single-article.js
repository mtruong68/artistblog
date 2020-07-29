import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'

import ArticleHeader from '../components/article-header'
import ArticleBody from '../components/article-body'
import ArticlePreview from '../components/article-preview'
import ArticleSlideshow from '../components/article-slideshow'
import Navigation from '../components/navigation'

class ArticleTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulArticle')
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
      <div style={{ background: post.color[0] }}>
        <Helmet title={`${post.artistName} | CE`} />
        <div className={heroStyles.hero}></div>

        <ArticleHeader
        titleQuote={post.titleQuote.childMarkdownRemark.excerpt}
        video={post.heroVideo.file.url}
        color={post.color}>
        </ArticleHeader>

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

        <ArticleSlideshow />
        <Navigation />
      </div>
    )
  }
}

export default ArticleTemplate

export const articleQuery = graphql`
  query ArticleBySlug($slug: String!) {
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
      }
    }
  }
`
