const React = require('react');

const headerVideoStyle = {
}

const ArticleHeader = function(props) {
  return (
    <div id="articleHeader"> 
      <video id="headerVideo" autoplay="true" muted="true" loop="true">
        <source src={props.videoSrc} type="video/mp4"/>
      </video>
      <div>
        <h1>“{props.headerQuote}”</h1>
      </div>
    </div>
  );
}

module.exports = ArticleHeader;