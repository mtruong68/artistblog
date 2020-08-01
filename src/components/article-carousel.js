import React from 'react'

import styles from './article-carousel.module.css'

import ArticlePreview from './article-preview'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;

  return <button className={styles.lArrow} onClick={() => onClick()} >
  <span style={{fontSize: "36px", position:"absolute", top:"7px", left:"5px"}} className="material-icons">chevron_left</span>
  </button>;
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;

  return <button className={styles.rArrow} onClick={() => onClick()}>
  <span style={{fontSize: "36px", position:"absolute", top:"6px", left:"8px"}} className="material-icons">chevron_right</span>
  </button>
  ;
};

class ArticleCarousel extends React.Component {
  render() {
    const carouselItems = this.props.carouselItems;

    return(
      <div className={styles.carouselContainer}>
      <div className={styles.header}>
        Take a look into other artists' thoughts.
      </div>
      <Carousel
        additionalTransfrom={0}
       customRightArrow={<CustomRightArrow />}
       customLeftArrow={<CustomLeftArrow />}
       className={styles.carousel}
       draggable
       focusOnSelect={false}
       infinite
       minimumTouchDrag={80}
       renderButtonGroupOutside={false}
       renderDotsOutside={false}
       responsive={{
         desktop: {
           breakpoint: {
             max: 3000,
             min: 1024
           },
           items: 3,
           partialVisibilityGutter: 0
         },
         mobile: {
           breakpoint: {
             max: 464,
             min: 0
           },
           items: 1,
           partialVisibilityGutter: -30
         },
         tablet: {
           breakpoint: {
             max: 1024,
             min: 464
           },
           items: 2,
           partialVisibilityGutter: -30
         }
       }}
       showDots={false}
       slidesToSlide={1}
       swipeable
      >
        {carouselItems.map((item , i) => {
          return (
          <ArticlePreview
            key = {`carousel-${i}`}
            slug = {item.node.slug}
            titleQuote = {item.node.titleQuote.childMarkdownRemark.excerpt}
            fluid = {item.node.carouselImage.fluid}
          >
          </ArticlePreview>
          )
        })}
      </Carousel>
      </div>
  )}
}

export default ArticleCarousel;
