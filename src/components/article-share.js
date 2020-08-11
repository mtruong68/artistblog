import React from 'react'

import styles from './article-share.module.css'

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

      <a className={styles.shareLink}
      rel="noreferrer"
      href={`https://twitter.com/intent/tweet?text=${text}&url=${url}`}
      target="_blank">
      Tweet</a>

      <span role="button"
      tabIndex={0}
      className={styles.shareLink}
      onKeyDown={this.copyLink(url)}
      onClick={this.copyLink(url)}>Link</span>
      </div>
    )
  }
}

export default ArticleShare;
