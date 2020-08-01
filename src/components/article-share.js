import React from 'react'

class ArticleShare extends React.Component {
  componentDidMount(){
  }

  render() {
    return (
      <div>
        hello
      <a className="twitter-share-button"
      href="https://twitter.com/intent/tweet?text=some%20art%20thoughts%20i%20wanted%20to%20share"
      target="_blank">
      Tweet</a>
      </div>
    )
  }
}

export default ArticleShare;
