import React, { useEffect, useState } from 'react'
import styles from './ChooseCityAndStreetModal.module.scss'
import InputField from "../../InputField/InputField"
import { getAddress } from "../../../../store/user/residence/actions"
import AddressNotFound from "../AddressNotFound/AddressNotFound"
import { connect } from 'react-redux'

export const ChooseCityAndStreetModal = ({ getAddress, streetList, city, streetListFetch, searchStreet }) => {
  const [ street, setStreet ] = useState('')

  useEffect(() => {
    getAddress(' ')
  }, [])

  const streetIsNotFind = !streetListFetch && streetList.length <= 0 && searchStreet.length > 0
  return (
    <div className={ styles.root }>
      <h1>Выберите город и улицу</h1>
      <InputField placeholder={ 'Введите вашу улицу' } value={ street } onChange={ value => getAddress(value) }
                  className={ styles.inputField }/>
      { streetIsNotFind ? <AddressNotFound strNotFount={ 'эта улица не найдена' }/> : <div className={ styles.rect }/> }
      <div className={ styles.container }>
        { streetIsNotFind ? null :
          <>
            {
              streetList.map((item, index) =>
                <div className={ styles.item } key={ index }>
                  <div className={ styles.street }>{ item.display_label }</div>
                  <div className={ styles.region }>{ item.additional_label || city.district_title }</div>
                </div>
              )
            }
          </>
        }
      </div>
      { streetIsNotFind ? null : <div className={ styles.transparentRect }/> }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    streetList: state.user.residence.streetList,
    streetListFetch: state.user.residence.streetListFetch,
    city: state.user.residence.city,
    searchStreet: state.user.residence.searchStreet
  }
}


const mapDispatchToProps = dispatch => ({
  getAddress: (street) => dispatch(getAddress((street)))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChooseCityAndStreetModal)
