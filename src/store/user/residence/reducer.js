import { createReducer } from "../../../utils/store"
import { GET_USER_CITY } from "./actions"

const defaultValue = {
  city: {},
}

export default createReducer(defaultValue, {
  [ GET_USER_CITY ]: (state, { city }) => ({ ...state, city })
})
