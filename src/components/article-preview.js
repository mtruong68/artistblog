import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'
import styled from 'styled-components';

const SetImg = styled(Img)`
  display: block;
  height: 300px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: black;
  }
`;

const ArticlePreview = (props) => {
  return (
  <div className={styles.articlePreview}>
  <StyledLink to={`/art/${props.slug}`}>
    <div>
    <SetImg
      alt=""
      fluid={props.fluid}
    />
    <h3 className={styles.previewTitle}>
      “{props.titleQuote}”
    </h3>
    </div>
  </StyledLink>
  </div>
  )
}

export default ArticlePreview;
