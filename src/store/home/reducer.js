import { combineReducers } from "redux"
import faq from './faq/reducer'
import searchProvider from './searchProvider/reducer'
import internetCities from './internetCities/reducer'

export default combineReducers({
  faq,
  searchProvider,
  internetCities
})
