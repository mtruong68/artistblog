const React = require('react');
const ArticleHeader= require('./ArticleHeader');

const Mary = {
  videoSrc: "https://cdn.glitch.com/a02d808e-2801-4704-98cb-bc2764e0e2b4%2Fcrgmp4.mp4?v=1595378014957",
  headerQuote: "Here is a quote for a header."
}

const ArticleStyle = {
  margin: '0'
}

const Article = function() {
  return (
    <div style="ArticleStyle">
      <ArticleHeader videoSrc={Mary.videoSrc} headerQuote={Mary.headerQuote}/>
    </div>
  );
}

module.exports = Article;