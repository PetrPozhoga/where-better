import { createReducer } from "../../../utils/store"
import { CHANGE_GET_SMS_LINK_MODAL, CHANGE_VALID_SEARCH_PROVIDER_NUMBER_FIELD,CLEAR_SEARCH_PROVIDER_NUMBER_FIELD  } from "./actions"

const defaultValue = {
  getSmsLinkModal: false,
  numberFieldError: false,
  numberFieldClear: false,
}

export default createReducer(defaultValue, {
  [ CHANGE_GET_SMS_LINK_MODAL ]: (state, { isOpen }) => ({ ...state, getSmsLinkModal: isOpen }),
  [ CHANGE_VALID_SEARCH_PROVIDER_NUMBER_FIELD ]: (state, { isError }) => ({ ...state, numberFieldError: isError }),
  [ CLEAR_SEARCH_PROVIDER_NUMBER_FIELD ]: (state, { clearField }) => ({ ...state, numberFieldClear: clearField }),
})
