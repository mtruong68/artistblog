import React from 'react'

import styles from './article-share.module.css'
import styled from 'styled-components';

const HoverElement = styled.a`
  text-decoration: none;
  &:hover {
    color: ${props => props.hoverColor};
  }
`;


class ArticleShare extends React.Component {
  render() {
    const siteUrl = this.props.siteUrl
    const text = `wanted%20to%20share%20this%20artist's%20art%20thoughts`
    const url = `${siteUrl}/art/${this.props.slug}`

    return (
      <div className={styles.shareContainer} style={{color: this.props.color}}>
      <div className={styles.shareText}>Share this article</div>
      <div className={styles.squiggleOuterWrapper}>
        <div className={styles.squiggleWrapper}>
          <div className={styles.squiggle}></div>
        </div>
      </div>

      <HoverElement
      hoverColor={this.props.hoverColor}
      className = {styles.shareLink}
      rel="noreferrer"
      href={`https://twitter.com/intent/tweet?text=${text}&url=${url}`}
      target="_blank">
      Tweet</HoverElement>

      <HoverElement
      hoverColor={this.props.hoverColor}
      className = {styles.shareLink}
      rel="noreferrer"
      href={`http://facebook.com/sharer/sharer.php?u=${url}`}
      target="_blank">
      Facebook</HoverElement>

      </div>
    )
  }
}

export default ArticleShare;
