import { combineReducers } from "redux"
import faq from './faq/reducer'
import advantages from './advantages/reducer'
import searchProvider from './searchProvider/reducer'

const defaultProps = {}

export default combineReducers({
  faq,
  advantages,
  searchProvider
})
