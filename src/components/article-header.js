import React from 'react'

import styles from './article-header.module.css'

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

  render(){
    console.log(this.props.color)
    console.log(this.props.video)
    return(
    <div>
      <video autoPlay muted loop className={styles.headerVideo}
      style={{background: this.props.color[1]}}>
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
        <button className={styles.headerButton} onClick={this.scrollDown}>
          <span className="material-icons">expand_more</span>
        </button>
      </div>
    </div>
    )
  }
}

export default ArticleHeader;
