import React from 'react'
import Img from 'gatsby-image'

import styles from './article-body.module.css'
import BodyParagraph from './body-paragraph'
import styled from 'styled-components';

const SetImg = styled(Img)`
  display: block !important;
  flex-grow: 1;
`;

const ArticleBody = ({ artistName, slug, color, images, subQuote, author, publishDate, articleText }) => {
  const articleBody = JSON.parse(articleText)
  let imgIdx = 0;
  for (let i = 0; i < articleBody.length; i++){
    if (articleBody[i].type === "image"){
      let numImages = articleBody[i].value;
      articleBody[i].value = images.slice(imgIdx, imgIdx+numImages);
      imgIdx+=numImages;
    }
  }

  return (
    <div className={styles.articleBodyWrapper}>
      <div className={styles.nameWrapper} id="title">
        <span className={styles.artistName}>{artistName}    </span>
        <span className={styles.subQuote}>{subQuote}</span>
      </div>
      <div className={styles.articleCredits}>
        <span>By {author}  </span><span>{publishDate}</span>
      </div>
      <div className={styles.squiggle}></div>
      <br></br>
      {articleBody.map(( node, i ) => {
        if(node.type === "paragraph"){
          return (<div key={`${slug}${i}`} className={styles.text}>{node.value}</div>);
        } else if (node.type === "heading-2") {
          return(
            <div key={`${slug}${i}`}>
              <div
              className={styles.quote}
              style={{color: "white"}}>
                “{node.value}”
              </div>
              <div className={styles.squiggleOuterWrapper}>
                <div className={styles.squiggleWrapper}>
                  <div className={styles.squiggleVertical}></div>
                </div>
              </div>
            </div>
          )
        } else {
          return (
            <div key={`${slug}${i}`} className={styles.imgContainer}>
              {node.value.map((imgNode, j) => {
                return(
                <SetImg key={`${slug}${i}-${j}`}
                  alt={imgNode.title}
                  fluid={imgNode.fluid}
                  imgStyle={{ objectFit: 'contain' }}
                />)
              })}
            </div>
          )
        }
      })}
    </div>
  )
}

export default ArticleBody;
