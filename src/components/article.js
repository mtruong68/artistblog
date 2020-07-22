import React from "react"

import ArticleHeader from "./articleheader"

const Mary = {
  videoSrc: "https://cdn.glitch.com/a02d808e-2801-4704-98cb-bc2764e0e2b4%2Fcrgmp4.mp4?v=1595378014957",
  headerQuote: "Something is going on"
}

const Article = ({  }) => {

  return (
    <>
      <ArticleHeader videoSrc={Mary.videoSrc} headerQuote={Mary.headerQuote} />
    </>
  )
}

export default Article
