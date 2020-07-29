import React from 'react'
import Img from 'gatsby-image'

import styles from './article-body.module.css'
import BodyParagraph from './body-paragraph'

const ArticleBody = ({ artistName, slug, color, images, subQuote, author, publishDate, articleText }) => {
  const articleBody = JSON.parse(articleText)
  let imgIdx = 0;
  for (let i = 0; i < articleBody.length; i++){
    if (articleBody[i].type === "image"){
      articleBody[i].value = images[imgIdx];
      imgIdx++;
    }
  }

  return (
    <div className={styles.articleBodyWrapper}>
      <div className={styles.nameWrapper}>
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
            <div key={`${slug}${i}`}>
            <Img
              alt={node.value.title}
              fluid={node.value.fluid}
            />
            </div>
          )
        }
      })}
    </div>
  )
}

export default ArticleBody;
