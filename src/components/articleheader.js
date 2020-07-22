import PropTypes from "prop-types"
import React from "react"

const ArticleHeader = ({ videoSrc, headerQuote }) => (
  <div>
    <video muted="true" autoplay="true" loop="true">
      <source src={videoSrc} />
    </video>
    <div>
      "{headerQuote}"
    </div>
  </div>
)

export default ArticleHeader
