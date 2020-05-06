import React from 'react'
import Select from "../../../Layouts/Select/Select"
import Btn from "../../../Layouts/Btn/Btn"
import styles from './Filters.module.scss'

const Filters = () => {
  const providerList = [
    { label: 'Мегафон', code: '1' },
    { label: 'Ростелеком', code: '2' },
  ]
  const tariffList = [
    { label: 'Интернет+ТВ+Мобильный', code: '1' },
    { label: 'Интернет', code: '2' },
    { label: 'ТВ+Мобильный', code: '3' },
    { label: 'Интернет+Мобильный', code: '4' },
  ]
  return (
    <div className={ styles.root }>
      <div className={ styles.providerContainer }>
        <Select name={ 'favorableRatesProvider' } itemKey={ 'label' } items={ providerList }
                selected={ providerList[ 0 ] }/>
      </div>
      <div className={ styles.tariffContainer }>
        <Select name={ 'favorableRatesTariff' } itemKey={ 'label' } items={ tariffList } selected={ tariffList[ 0 ] }/>
      </div>
      <Btn className={ styles.btn } title={ 'Подобрать тариф' } styleBtn={ 'blackTransparent' }/>
    </div>
  )
}

export default Filters
