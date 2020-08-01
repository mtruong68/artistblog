import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulArticle.edges')

    return (
      <Layout location={this.props.location}>
          <script
          dangerouslySetInnerHTML={{
          __html: `window.twttr = (function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0],
                      t = window.twttr || {};
                    if (d.getElementById(id)) return t;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "https://platform.twitter.com/widgets.js";
                    fjs.parentNode.insertBefore(js, fjs);

                    t._e = [];
                    t.ready = function(f) {
                      t._e.push(f);
                    };

                    return t;
                  }(document, "script", "twitter-wjs"));`,
              }}
        />
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                  <Link to={`/art/${node.slug}`}>
                    {node.slug}
                  </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulArticle {
      edges {
        node {
          artistName
          titleQuote {
            childMarkdownRemark {
              html
            }
          }
          slug
        }
      }
    }
  }
`
