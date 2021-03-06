import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import Footer from '../components/footer'

import styles from './about.module.css'

class AboutPage extends React.Component {
  render() {
    const siteMetadata = get(this, 'props.data.site.siteMetadata')

    return (
        <div>
          <Helmet title={`About | ${siteMetadata.title}`}>
          <link rel="icon" type="image/png"
          href={`${siteMetadata.favicon}`}
          sizes="16x16"
          />
          </Helmet>
          <div className={styles.logoWrapper}>
            <Link to={`/`}>
              <img alt="logo_large" src={`${siteMetadata.logoLarge}`} />
            </Link>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.question}>
            Why is this site called called Art-Discontent?
            </div>
            <div className={styles.answer}>
              It's a pun for 'Artist Content', an acknowledgement that the art content
              comes second in this site (and the artist's perspective on their practice/art first),
              and a reaction against the veneration of art solely from its mysticism.
              I think art is richer and deeper from explicit conversation. If your art relies on
              obfuscation to be interesting, then I'm not interested in it.
            </div>
            <div className={styles.question}>
              Why did you make this site?
            </div>
            <div className={styles.answer}>
              I saw this <a href="https://wepresent.wetransfer.com/story/emma-larsson/">webpage</a> and thought
              that it would be neat to create interesting, professional web articles for artists who might not
              usually get that opportunity. And then it evolved into wanting to be an archive of philosophies about
              young practices-- not every person pursuing fine arts is going to "make it" in the art world (the
              majority of these interviews come from people who are a year or two out of undergrad). I think it would
              be a shame to lose so many thoughts about art, and so this website is trying to keep a record of that.
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
              If it's on Internet Explorer, I won't care.
              If it lets you hack into the site, feel free to do so.
              I am well aware that there are Safari bugs and on mobile (esp tablets) the
              layout needs a lot of adjustment... it's still a work in progress.
              E-mail me at mtruong68@gmail.com if you think I should address the bugs.
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
              What did you learn from making this site?
            </div>
            <div className={styles.answer}>
            <ul>
              <li>The responsibility of writing about another's practice is heavier than first expected.</li>
              <li>There are many ways for an artwork to emerge from a practice.</li>
              <li>Artists process the world using art.</li>
              <li>Creation is compulsive for artists.</li>
            </ul>
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
  site {
    siteMetadata{
      title
      favicon
      logoLarge
    }
  }
}
`

export default AboutPage
