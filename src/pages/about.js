import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Footer from '../components/footer'

import styles from './about.module.css'

class AboutPage extends React.Component {
  render() {
    const logoLarge = get(this, 'props.data.allContentfulBranding.edges[0].node.logoLarge.fixed')

    return (
        <div>
          <div className={styles.logoWrapper}>
            <Link to={`/`}>
              <Img fixed={logoLarge} />
            </Link>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.question}>
            Why is this site called called Art-Discontent?
            </div>
            <div className={styles.answer}>
              It's a pun for 'Artist Content', an acknowledgement that the art content
              comes second in this site (and the artist's perspective on art first),
              and a reaction against the veneration of art solely from its mysticism.
              I think art is richer and deeper from explicit conversation. If your art art relies on
              obfuscation to be interesting, then I'm not interested in it.
            </div>
            <div className={styles.question}>
              Why did you make this site?
            </div>
            <div className={styles.answer}>
              I saw this <a href="https://wepresent.wetransfer.com/story/emma-larsson/">webpage</a> and thought
              that it would be neat to create interesting, professional web articles for otherwise unknown artists.
              And then I thought that creating an archive of art perspectives from people who are not fully integrated
              in the 'fine arts world' (yet) would be interesting. As a pretty young artist, I want to know what other
              artists feel about art, how they're navigating their questions and uncertainties, and any truths that they've
              come to know about art.
            </div>
            <div className={styles.question}>How did you make this site?</div>
            <div className={styles.answer}>
              I used <a href="https://www.gatsbyjs.org/">Gatsby</a> as the framework to
              build this, <a href="https://www.contentful.com/">Contentful</a> for content management,
              and <a href="https://www.netlify.com/"> Netlify</a> for deployment. You can see
              the <a href="https://github.com/mtruong68/artistblog">codebase here</a>. I also used
              the <a href="https://www.npmjs.com/package/react-multi-carousel">react-multi-carousel</a> because
              I didn't want to write a carousel component. If you want advice for building a site like this, you
              can contact me, but there's already a ton of content and tutorials on the Internet for things like this.
            </div>
            <div className={styles.question}>
              There's some whack bug in this site.
            </div>
            <div className={styles.answer}>
              If it's on Internet Explorer, I won't care. If it's a Safari bug, there's a 50-50 chance I'll get to it.
              If it lets you hack into the site, feel free to do so. E-mail me at mtruong68@gmail.com if you think I should
              address it.
            </div>
            <div className={styles.question}>
              Can you publish me?
            </div>
            <div className={styles.answer}>
              Send your portfolio and artist statement to mtruong68@gmail.com, and
              I'll let you know if I'm interested in publishing an article about you. You also don't have to be a fine artist;
              illustrators, graphic designers, UX/UI people are welcome (but still send me some sort of statement about your
              perspective on art). I'm more interested in publishing unique perspectives about art, but the artwork matters
              as well. I also am more interested in writing about relatively unknown artists.
            </div>
            <div className={styles.question}>
              I have another question for you.
            </div>
            <div className={styles.answer}>
              Just e-mail me-- mtruong68@gmail.com.
            </div>
          </div>
          <Footer />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query AboutQuery {
    allContentfulBranding{
      edges{
        node{
          logo{
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid
            }
          }
          logoLarge{
            fixed(width: 200) {
              ...GatsbyContentfulFixed
            }
          }
        }
    }
  }
}
`

export default AboutPage
