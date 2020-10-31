import React from 'react'
import Img from 'gatsby-image'

import styles from './article-header.module.css'
import styled from 'styled-components';

const VideoStillImg = styled(Img)`
  display: block !important;
  background: ${props => props.bgColor};
  height: 100vh;
  max-width: 100vw;
`;

class ArticleHeader extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      titlePos: 0
    }
    this.scrollDown = this.scrollDown.bind(this);
  }

  componentDidMount(){
    this.setState((state) => {
      state.titlePos = document.getElementById('content').getBoundingClientRect().top;
    });

  }

  scrollDown(){
    window.scrollTo({top: this.state.titlePos, behavior:'smooth'});
  }

  changeBackground(color){
    let video = document.getElementById('video');
    video.style.background = color;
  }

  render(){
    return(
    <div>
    <VideoStillImg
    className={styles.headerImage}
    fluid={this.props.videoStill.fluid}
    bgColor={this.props.color[1]}
    imgStyle={{ objectFit: 'contain' }}>
    </VideoStillImg>

    <video
    id='video'
    autoPlay muted loop playsInline className={styles.headerVideo}
    onLoadedData={this.changeBackground.bind(this, this.props.color[1])}>
      <source src={this.props.video} />
    </video>



      <div className={styles.foreground}>

        <div className={styles.titleQuote}
        style={{ background: this.props.color[2],
        color: this.props.color[3] }}>
          “{this.props.titleQuote}”
        </div>
        <div className={styles.squiggleOuterWrapper}>
          <div className={styles.squiggleWrapper}>
            <div className={styles.squiggle}></div>
          </div>
        </div>
        <button
        className={styles.headerButton}
        onClick={this.scrollDown}
        style={{ background: this.props.color[2]}}>
          <span className="material-icons">expand_more</span>
        </button>


      </div>
    </div>
    )
  }
}

export default ArticleHeader;
