import { combineReducers } from 'redux'
import home from '../home/reducer'
import modal from '../modal/reducer'
import window from '../window/reducer'

const combinedReducer = combineReducers({
  home,
  window,
  modal
})

export default combinedReducer
