import { combineReducers } from "redux"
import faq from './faq/reducer'
import searchProvider from './searchProvider/reducer'

const defaultProps = {}

export default combineReducers({
  faq,
  searchProvider
})
