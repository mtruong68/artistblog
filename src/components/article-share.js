import React from 'react'

class ArticleShare extends React.Component {
  componentDidMount(){
    if (typeof window.twttr.widgets !== 'undefined') {
      window.twttr.widgets.load()
    }
  }

  render() {
    return (
      <div>
        hello
      <a className="twitter-share-button"
      rel="noreferrer"
      href="https://twitter.com/intent/tweet?text=some%20art%20thoughts%20i%20wanted%20to%20share&url=https://discontent.netlify.app/art/very-struong"
      target="_blank">
      Tweet</a>
      </div>
    )
  }
}

export default ArticleShare;
