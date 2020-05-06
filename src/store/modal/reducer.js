import { createReducer } from "../../utils/store"

import {
  CHANGE_ADVANTAGES_CONSULTATION_MODAL,
  CHANGE__CONSULTATION_SEND_MODAL,
  CHANGE_VALID_CONSULTATION_NUMBER_FIELD,
  CLEAR_CONSULTATION_NUMBER_FIELD
} from './actions'

const defaultValue = {
  consultationModal: false,
  consultationNumberError: false,
  consultationNumberClear: false,
  consultationSendModal: false
}

export default createReducer(defaultValue, {
  [ CHANGE_ADVANTAGES_CONSULTATION_MODAL ]: (state, { isOpen }) => ({ ...state, consultationModal: isOpen }),
  [ CHANGE__CONSULTATION_SEND_MODAL ]: (state, { isOpen }) => ({ ...state, consultationSendModal: isOpen }),
  [ CHANGE_VALID_CONSULTATION_NUMBER_FIELD ]: (state, { isError }) => ({ ...state, consultationNumberError: isError }),
  [ CLEAR_CONSULTATION_NUMBER_FIELD ]: (state, { clearField }) => ({ ...state, consultationNumberClear: clearField }),
})
