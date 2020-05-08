import React, { useEffect } from 'react'
import InputField from "../../InputField/InputField"
import styles from './ChooseYourCityModal.module.scss'
import { searchUserCity } from "../../../../store/user/residence/actions"
import { connect } from "react-redux"
import AddressNotFound from "../AddressNotFound/AddressNotFound"

const ChooseYourCityModal = ({ cityList, searchUserCity, district_title, cityListFetch }) => {

  useEffect(() => {
    searchUserCity(district_title)
  }, [ useEffect ])

  const cityIsNotFind = !cityListFetch && cityList.length <= 0 && searchUserCity.length > 0

  return (
    <div className={ styles.root }>
      <h1>Выберите ваш город</h1>
      <InputField placeholder={ 'Введите ваш город' } value={ '' } onChange={ value => searchUserCity(value) }
                  className={ styles.inputField }/>
      { cityIsNotFind ? <AddressNotFound strNotFount={ 'этот город не найден' }/> : null }
      <div className={ styles.cityRoot }>
        <div className={ styles.cityContainer }>
          <div className={ styles.column }>
            { cityList.map((city, index) =>
              <div className={ styles.item } key={ index }>
                <div className={ styles.region }>{ city.additional_label || district_title }</div>
                <div className={ styles.city }>{ city.display_label }</div>
              </div>
            ) }
          </div>
        </div>
      </div>
      { cityIsNotFind ? null : <div className={ styles.transparentRect }/> }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cityList: state.user.residence.cityList,
    cityListFetch: state.user.residence.cityListFetch,
    district_title: state.user.residence.city.district_title,
    searchCity: state.user.residence.searchCity
  }
}


const mapDispatchToProps = dispatch => ({
  searchUserCity: (city) => dispatch(searchUserCity((city)))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChooseYourCityModal)
