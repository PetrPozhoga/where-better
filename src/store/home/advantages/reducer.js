import { createReducer } from "../../../utils/store"
import { CHANGE_ADVANTAGES_CONSULTATION_MODAL } from './actions'

const defaultValue = {
  consultationModal: false
}

export default createReducer(defaultValue, {
  [CHANGE_ADVANTAGES_CONSULTATION_MODAL]: (state, { isOpen }) => ({ ...state, consultationModal: isOpen })
})
