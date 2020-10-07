import React from 'react'
import Img from 'gatsby-image'

import styles from './article-body.module.css'
import styled from 'styled-components';

const SetImg = styled(Img)`
  display: block !important;
  flex-grow: 1;
  margin-right: 1em;
`;

const HoverElement = styled.a`
  color: ${props => props.defaultColor};
  text-decoration: none;
  &:hover {
    color: ${props => props.hoverColor};
    text-decoration: underline;
  }
`;

const ArticleBody = ( props ) => {
  const articleBody = JSON.parse(props.articleText)
  let imgIdx = 0;
  for (let i = 0; i < articleBody.length; i++){
    if (articleBody[i].type === "image"){
      let numImages = articleBody[i].value;
      articleBody[i].value = props.images.slice(imgIdx, imgIdx+numImages);
      imgIdx+=numImages;
    }
  }

  return (
    <div className={styles.articleBodyWrapper} style={{color: props.color[5]}}>
      <div className={styles.nameWrapper} id="title">
        <span className={styles.artistName}>{props.artistName}    </span>
        <span className={styles.subQuote}>{props.subQuote}</span>
      </div>
      <div className={styles.articleCredits}>
        <span>By {props.author}  </span><span>{props.publishDate}</span>
      </div>
      <div className={styles.squiggle}></div>
      <br></br>
      {articleBody.map(( node, i ) => {
        if(node.type === "paragraph"){
          return (<div key={`${props.slug}${i}`} className={styles.text}>
            {node.value.map((pNode, j) => {
              if (pNode.nodeType === "text"){
                return (
                <span key={`${props.slug}${i}-${j}`}>{pNode.value}</span>
                )
              } else if (pNode.nodeType === "hyperlink") {
                return(
                  <HoverElement
                  key={`${props.slug}${i}-${j}`}
                  defaultColor={props.color[4]}
                  hoverColor={props.color[6]}
                  href={pNode.data.uri}
                  target={'_blank'}>
                    {pNode.content[0].value}
                  </HoverElement>
                )
              } else {
                return(<span key={`${props.slug}${i}-${j}`}></span>)
              }
            })}
            </div>
          );
        } else if (node.type === "heading-2") {
          return(
            <div key={`${props.slug}${i}`}   className={styles.quote} style={{color: props.color[4]}}>
              <div>
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
            <div key={`${props.slug}${i}`} className={styles.imgContainer}>
              {node.value.map((imgNode, j) => {
                if (imgNode.description){
                  return (
                  <a className={styles.linkedImage}
                  key={`${props.slug}${i}-${j}`}
                  href={`${imgNode.description}`}>
                    <SetImg
                      alt={imgNode.title}
                      fluid={imgNode.fluid}
                      imgStyle={{ objectFit: 'contain' }}
                    />
                  </a>)
                } else {
                  return(
                  <SetImg key={`${props.slug}${i}-${j}`}
                    alt={imgNode.title}
                    fluid={imgNode.fluid}
                    imgStyle={{ objectFit: 'contain' }}
                  />)
                }
              })}
            </div>
          )
        }
      })}
      <div className={styles.artistSite}>
        See more from the artist at <br></br>
        <HoverElement
          defaultColor={props.color[5]}
          hoverColor={props.color[6]}
          href={`${props.artistSite}`}>
            {props.artistSite}
        </HoverElement>
      </div>
    </div>
  )
}

export default ArticleBody;
