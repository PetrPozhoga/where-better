import { fetcher } from "../../../utils/fetcher"
import { api } from "../../../api"

export const GET_USER_CITY = 'GET_USER_CITY'

export const CHANGE_USER_CITY_LIST = 'CHANGE_USER_CITY_LIST'
export const CHANGE_USER_SEARCH_CITY = 'CHANGE_USER_SEARCH_CITY'
export const CHANGE_USER_CITY_LIST_FETCH = 'CHANGE_USER_CITY_LIST_FETCH'

export const CHANGE_USER_STREET_LIST = 'CHANGE_USER_STREET_LIST'
export const CHANGE_SEARCH_STREET = 'CHANGE_SEARCH_STREET'
export const CHANGE_USER_STREET_LIST_FETCH = 'CHANGE_USER_STREET_LIST_FETCH'

export const getUserCity = () => async dispatch => {
  try {
    let res = await fetcher(api.user.getCity)
    if (res.status !== 200) return
    dispatch({ type: GET_USER_CITY, city: res.data })
  } catch (err) {
    console.log(err, 'getUserCity')
  }
}

export const searchUserCity = (city) => (dispatch, getState)=> {
  try {
    dispatch({ type: CHANGE_USER_CITY_LIST_FETCH, cityListFetch: true })
    dispatch({ type: CHANGE_USER_SEARCH_CITY, search: city.trim() || '' })
    setTimeout(async () => {
      const prevStreetState = JSON.parse(JSON.stringify(getState().user.residence.searchCity).trim())
      city = city.trim()
      console.log(prevStreetState, city)
      if (prevStreetState !== city && prevStreetState.length > 0) return
      else if (getState().user.residence.cityList.length > 0 && city.length <= 0) {
        return dispatch({ type: CHANGE_USER_CITY_LIST_FETCH, cityListFetch: false })
      }
      try {
        const copyApy = JSON.parse(JSON.stringify(api.user.getCityList))
        copyApy.url += city || getState().user.residence.city.district_title
        let res = await fetcher(copyApy)
        if (res.status !== 200 || res.data === null) return
        dispatch({ type: CHANGE_USER_CITY_LIST, cityList: res.data })
        dispatch({ type: CHANGE_USER_CITY_LIST_FETCH, cityListFetch: false })
      } catch (err) {
        dispatch({ type: CHANGE_USER_CITY_LIST_FETCH, cityListFetch: false })
        console.log(err, 'searchUserCity')
      }
    }, 300)
  }catch(err) {

  }
}

export const getAddress = (street) => (dispatch, getState) => {
  try {
    dispatch({ type: CHANGE_USER_STREET_LIST_FETCH, streetListFetch: true })
    dispatch({ type: CHANGE_SEARCH_STREET, search: street || '' })
    setTimeout(async () => {
      const prevStreetState = getState().user.residence.searchStreet
      if (prevStreetState !== street && prevStreetState.length > 0) return
      else if (getState().user.residence.streetList.length > 0 && street.trim().length <= 0) {
        return dispatch({ type: CHANGE_USER_STREET_LIST_FETCH, cityListFetch: false })
      }
      const cityId = getState().user.residence.city.city_id
      const district_id = getState().user.residence.city.district_id
      try {
        const copyApy = JSON.parse(JSON.stringify(api.user.getAddress))
        copyApy.url += 'city_id=' + cityId + '&district_id=' + district_id + '&term=' + street
        let res = await fetcher(copyApy)
        if (res.status !== 200 || res.data === null) return
        dispatch({ type: CHANGE_USER_STREET_LIST, streetList: res.data })
        dispatch({ type: CHANGE_USER_STREET_LIST_FETCH, streetListFetch: false })
      } catch (err) {
        dispatch({ type: CHANGE_USER_STREET_LIST_FETCH, streetListFetch: false })
        console.log(err, 'getAddress')
      }
    }, 600)
  }catch(err) {

  }
}
