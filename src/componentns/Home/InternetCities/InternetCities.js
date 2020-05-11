import React, { memo } from 'react'
import SlideShow from "../../Layouts/SlideShow/SlideShow"
import styles from './InternetCities.module.scss'
import { connect } from "react-redux"

const InternetCities = ({ windowInnerWidth, internetCityList }) => {

  return (
    <div className={ styles.root }>
      <h1>Города, в которых можно подключить интернет</h1>
      <SlideShow windowInnerWidth={ windowInnerWidth }
                 showElements={ windowInnerWidth <= 700 ? 1 : windowInnerWidth <= 950 ? 2 : windowInnerWidth <= 1267 ? 3 : 4 }
                 marginRight={ windowInnerWidth <= 700 ? 0 : windowInnerWidth <= 950 ? 20 : 15 }
                 paddingLeft={ windowInnerWidth <= 700 ? 42 : windowInnerWidth <= 950 ? 77 : windowInnerWidth <= 1267 ? 60 : 90 }
                 paddingRight={ windowInnerWidth <= 700 ? 42 : windowInnerWidth <= 950 ? 77 : windowInnerWidth <= 1267 ? 60 : 90 }
                 idRoot={ 'internetCitiesId' }
                 classNameContainer={ 'internetCities' } slideHeight={ windowInnerWidth <= 700 ? 296 : 439 }
                 animationTime={ 300 }>
        { internetCityList.map((item, index) =>
          <div key={ index } className={ styles.item }>
            { item.map((city, index) =>
              <div key={ index }>
                { city.district }
              </div>
            ) }
          </div>
        ) }
      </SlideShow>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    windowInnerWidth: state.window.size.windowInnerWidth,
    internetCityList: state.home.internetCities.internetCityList
  }
}

export default connect(mapStateToProps)(InternetCities)
