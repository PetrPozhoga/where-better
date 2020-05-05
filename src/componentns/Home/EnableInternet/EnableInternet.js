import React from 'react'
import Btn from "../../Layouts/Btn/Btn"
import InputField from "../../Layouts/InputField/InputField"
import styles from './EnableInternet.module.scss'

const EnableInternet = () => {
  return (
    <div className={ styles.root }>
      <h1>Подключите домашний интернет</h1>
      <h2>Более 200 интернет-провайдеров доступно для подключения</h2>
      <div className={ styles.searchContainer }>
        <InputField value={''} inputId={ 'EnableInternetSearchProvider' } placeholder={'Введите адрес'}/>
        <Btn title={ 'Найти провайдера' } styleBtn='redLarge' className={ styles.btn }/>
      </div>
      <div className={ styles.provider }>
        { [ 'rostelecom', 'biline', 'mtc', 'megafon' ].map((item, key) =>
          <div className={ styles[ item ] } key={ key }/>
        ) }
      </div>
    </div>
  )
}

export default EnableInternet
