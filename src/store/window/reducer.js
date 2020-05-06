import { createReducer } from "../../utils/store"
import { CHANGE_WINDOW_SIZE, CHANGE_LOCATION_ORIGIN } from './actions'

const defaultProps = {
  size: {},
  location: {
    origin: ''
  }
}

export default createReducer(defaultProps, {
  [ CHANGE_WINDOW_SIZE ]: (state, { size }) => ({ ...state, size }),
  [ CHANGE_LOCATION_ORIGIN ]: (state, { origin }) => ({ ...state, location: { ...state.location, origin } }),
})
