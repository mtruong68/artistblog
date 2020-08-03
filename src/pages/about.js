import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'

class AboutPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default AboutPage
