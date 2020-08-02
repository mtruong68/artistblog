import React from 'react'

import styles from './article-share.module.css'

class ArticleShare extends React.Component {
  constructor(props){
    super(props);
    this.copyLink = this.copyLink.bind(this);
  }

  copyLink(url){
      navigator.clipboard.writeText(url).then(function() {
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
  }

  render() {
    const siteUrl = this.props.siteUrl
    const text = `wanted%20to%20share%20this%20artist's%20art%20thoughts`
    const url = `${siteUrl}/art/${this.props.slug}`

    return (
      <div className={styles.shareContainer}>
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

      <span className={styles.shareLink} onClick={this.copyLink(url)}>Link</span>
      </div>
    )
  }
}

export default ArticleShare;
