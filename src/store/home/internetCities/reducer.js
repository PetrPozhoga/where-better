import { createReducer } from "../../../utils/store"

import { GET_INTERNET_CITY_LIST, GET_INTERNET_CITY_LIST_FETCH } from "./actions"

const defaultValue = {
  internetCityList: [],
  internetCityListFetch: false
}

export default createReducer(defaultValue, {
  [ GET_INTERNET_CITY_LIST ]: (state, { internetCityList }) => ({ ...state, internetCityList }),
  [ GET_INTERNET_CITY_LIST_FETCH ]: (state, { fetching }) => ({ ...state, internetCityListFetch: fetching }),
})
