import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'

class ArtPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulArticle.edges')

    return (
      <Layout location={this.props.location}>
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

export default ArtPage

export const pageQuery = graphql`
  query ArtHomeQuery {
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
