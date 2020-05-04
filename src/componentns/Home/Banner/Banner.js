import React from 'react'
import SlideShow from "../../Layouts/SlideShow/SlideShow"
import styles from './Banner.module.scss'
import bannerImg from './banner.jpg'
import bannerMobileImg from './bannerMobile.png'
import { connect } from 'react-redux'

const Banner = ({ windowInnerWidth }) => {

  return (
    <div className={ styles.root }>
      <SlideShow showElements={ 1 }
                 windowInnerWidth={ windowInnerWidth }
                 animationTime={ 500 }
                 classNameContainer={ styles.container } slideHeight={ '286px' } idRoot='banner'>
        { [ 'red', 'gray', 'black' ].map((item, key) =>
          <div className={ styles.item } key={ key }>
            <img src={ windowInnerWidth <= 700 ? bannerMobileImg : bannerImg } alt=""/>
          </div>
        ) }
      </SlideShow>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    windowInnerWidth: state.window.size.windowInnerWidth
  }
}

export default connect(mapStateToProps)(Banner)
