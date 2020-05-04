import { createReducer } from "../../utils/store"
import { CHANGE_WINDOW_SIZE } from './actions'

const defaultProps = {
  size: {}
}

export default createReducer(defaultProps, {
  [ CHANGE_WINDOW_SIZE ]: (state, { size }) => ({ ...state, size })
})
