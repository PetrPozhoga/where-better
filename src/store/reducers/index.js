import { combineReducers } from 'redux'
import home from '../home/reducer'
import modal from '../modal/reducer'
import window from '../window/reducer'
import user from '../user/reducer'

const combinedReducer = combineReducers({
  home,
  window,
  modal,
  user
})

export default combinedReducer
