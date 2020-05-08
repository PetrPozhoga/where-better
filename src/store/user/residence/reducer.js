import { createReducer } from "../../../utils/store"
import { GET_USER_CITY, CHANGE_SEARCH_STREET, CHANGE_USER_STREET_LIST, CHANGE_USER_STREET_LIST_FETCH, CHANGE_USER_CITY_LIST, CHANGE_USER_CITY_LIST_FETCH, CHANGE_USER_SEARCH_CITY } from "./actions"

const defaultValue = {
  city: {},
  searchStreet: '',
  streetList: [],
  streetListFetch: false,

  searchCity: '',
  cityList: [],
  cityListFetch: false,
}

export default createReducer(defaultValue, {
  [ GET_USER_CITY ]: (state, { city }) => ({ ...state, city }),
  [ CHANGE_SEARCH_STREET ]: (state, { search }) => ({ ...state, searchStreet: search }),
  [ CHANGE_USER_STREET_LIST ]: (state, { streetList }) => ({ ...state, streetList }),
  [ CHANGE_USER_STREET_LIST_FETCH ]: (state, { streetListFetch }) => ({ ...state, streetListFetch }),
  [ CHANGE_USER_CITY_LIST ]: (state, { cityList }) => ({ ...state, cityList }),
  [ CHANGE_USER_CITY_LIST_FETCH ]: (state, { cityListFetch }) => ({ ...state, cityListFetch }),
  [ CHANGE_USER_SEARCH_CITY ]: (state, { search }) => ({ ...state, searchCity: search }),
})
