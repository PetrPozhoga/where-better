import React, { memo } from 'react'
import SlideShow from "../../Layouts/SlideShow/SlideShow"
import styles from './InternetCities.module.scss'
import { connect } from "react-redux"

const InternetCities = memo(({ windowInnerWidth }) => {
  const cities = [
    [ 'Москва', 'Московская область', 'Санкт-Петербург город', 'Ленинградская область', 'Адыгея республика', 'Алтай республика', 'Алтайский край', 'Амурская область', 'Архангельская область' ],
    [ 'Москва', 'Московская область', 'Санкт-Петербург город', 'Ленинградская область', 'Адыгея республика', 'Алтай республика', 'Алтайский край', 'Амурская область', 'Архангельская область' ],
    [ 'Москва', 'Московская область', 'Санкт-Петербург город', 'Ленинградская область', 'Адыгея республика', 'Алтай республика', 'Алтайский край', 'Амурская область', 'Архангельская область' ],
    [ 'Москва', 'Московская область', 'Санкт-Петербург город', 'Ленинградская область', 'Адыгея республика', 'Алтай республика', 'Алтайский край', 'Амурская область', 'Архангельская область' ],
    [ 'Москва', 'Московская область', 'Санкт-Петербург город', 'Ленинградская область', 'Адыгея республика', 'Алтай республика', 'Алтайский край', 'Амурская область', 'Архангельская область' ]
  ]
  return (
    <div className={ styles.root }>
      <h1>Города, в которых можно подключить интернет</h1>
      <SlideShow windowInnerWidth={ windowInnerWidth }
                 showElements={ windowInnerWidth <= 700 ? 1 : windowInnerWidth <= 950 ? 2 : windowInnerWidth <= 1267 ? 3 : 4 }
                 marginRight={ windowInnerWidth <= 700 ? 0 : windowInnerWidth <= 950 ? 20 : 15 }
                 paddingLeft={ windowInnerWidth <= 700 ? 42 : windowInnerWidth <= 950 ? 77 : windowInnerWidth <= 1267 ? 60 : 90 }
                 paddingRight={ windowInnerWidth <= 700 ? 42 : windowInnerWidth <= 950 ? 77 : windowInnerWidth <= 1267 ? 60 : 90 }
                 idRoot={ 'internetCitiesId' }
                 classNameContainer={ 'internetCities' } slideHeight={ windowInnerWidth <= 700 ? 296 :439 } animationTime={ 300 }>
        { cities.map((item, index) =>
          <div key={ index } className={ styles.item }>
            { item.map((city, index) =>
              <div key={ index }>
                { city }
              </div>
            ) }
          </div>
        ) }
      </SlideShow>

    </div>
  )
})

const mapStateToProps = state => {
  return {
    windowInnerWidth: state.window.size.windowInnerWidth
  }
}

export default connect(mapStateToProps)(InternetCities)
