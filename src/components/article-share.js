import React from 'react'

import styles from './article-share.module.css'
import styled from 'styled-components';

const HoverElement = styled.a`
  text-decoration: none;
  &:hover {
    color: ${props => props.hoverColor};
  }
`;

const HoverButton = styled.span`
  &:hover {
    color: ${props => props.hoverColor};
  }
`;


class ArticleShare extends React.Component {
  copyLink(url){
    if(typeof window !== 'undefined'){
      window.navigator.clipboard.writeText(url).then(function() {
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
    }
  }

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

      <HoverButton
      role="button"
      hoverColor={this.props.hoverColor}
      tabIndex={0}
      className={styles.shareLink}
      onKeyDown={this.copyLink(url)}
      onClick={this.copyLink(url)}>Link</HoverButton>
      </div>
    )
  }
}

export default ArticleShare;
