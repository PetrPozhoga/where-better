import { combineReducers } from 'redux'
import home from '../home/reducer'
import window from '../window/reducer'

const combinedReducer = combineReducers({
  home,
  window
})

export default combinedReducer
