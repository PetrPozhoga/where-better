import { createReducer } from "../../utils/store"
import faq from './faq/reducer'
import advantages from './advantages/reducer'
import { combineReducers } from "redux"

const defaultProps = {}

export default combineReducers({
  faq,
  advantages
})
