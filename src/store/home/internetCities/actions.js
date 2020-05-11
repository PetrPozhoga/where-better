import { fetcher } from "../../../utils/fetcher"
import { api } from "../../../api"

export const GET_INTERNET_CITY_LIST = 'GET_INTERNET_CITY_LIST'
export const GET_INTERNET_CITY_LIST_FETCH = 'GET_INTERNET_CITY_LIST_FETCH'

export const getInternetCityList = () => async dispatch => {
  try {
    dispatch({ type: GET_INTERNET_CITY_LIST_FETCH, fetching: true })
    let res = await fetcher(api.internetCity.getInternetCityList)
    if (res.status !== 200 || res.data === null) {
      return dispatch({ type: GET_INTERNET_CITY_LIST_FETCH, fetching: false })
    }
    else {
      let { data } = res
      const internetCityList = parseCityList(data)
      dispatch({type: GET_INTERNET_CITY_LIST, internetCityList})
      dispatch({ type: GET_INTERNET_CITY_LIST_FETCH, fetching: false })
    }
  } catch (err) {
    dispatch({ type: GET_INTERNET_CITY_LIST_FETCH, fetching: false })
    console.log(err, getInternetCityList)
  }
}

const parseCityList = cityList => {
  let totalItemsInColumn = 9
  let returnedArr = new Array(Math.ceil(cityList.length / totalItemsInColumn))
  return Array.apply(null, returnedArr).map((item, index) => {
    let firstIndex = index * totalItemsInColumn
    const secondIndex = firstIndex + totalItemsInColumn
    return cityList.slice(firstIndex, secondIndex)
  })
}
