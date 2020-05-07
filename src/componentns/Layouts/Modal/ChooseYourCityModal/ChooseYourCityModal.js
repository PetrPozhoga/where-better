import React, { useState, useEffect } from 'react'
import InputField from "../../InputField/InputField"
import styles from './ChooseYourCityModal.module.scss'

const ChooseYourCityModal = () => {
  const cityList = [
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
    {
      "city_title": "Москва",
      "district_title": "Москва",
    },
  ]

  const [ cityListColumn, setCityListColumn ] = useState([])

  useEffect(() => {
    setCityListColumn(createColumn(cityList, 4))
  }, [])

  const createColumn = (arr, column) => {
    return Array.apply(null, new Array(column)).map((item, index) => {
      const totalElementInArr = Math.ceil(arr.length / column)
      const firstIndex = totalElementInArr * index
      const secondIndex = firstIndex + totalElementInArr
      return arr.slice(firstIndex, secondIndex)
    })
  }

  return (
    <div className={ styles.root }>
      <h1>Выберите ваш город</h1>
      <InputField placeholder={ 'Введите ваш город' } value={ '' } className={ styles.inputField }/>
      <div className={ styles.cityRoot }>
        <div className={ styles.cityContainer }>
          { cityListColumn.map((column, indexColumn) =>
            <div className={ styles.column } key={ indexColumn }>
              { column.map((city, index) =>
                <div className={ styles.item } key={ index }>
                  <div className={ styles.region }>{ city.district_title }</div>
                  <div className={ styles.city }>{ city.city_title }</div>
                </div>
              ) }
            </div>
          ) }
        </div>
      </div>
    </div>
  )
}

export default ChooseYourCityModal
