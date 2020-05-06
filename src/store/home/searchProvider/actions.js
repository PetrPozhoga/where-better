import { validNumber } from "../../../utils/inputField"

export const CHANGE_GET_SMS_LINK_MODAL = 'CHANGE_GET_SMS_LINK_MODAL'
export const CHANGE_VALID_SEARCH_PROVIDER_NUMBER_FIELD = 'CHANGE_VALID_SEARCH_PROVIDER_NUMBER_FIELD'
export const CLEAR_SEARCH_PROVIDER_NUMBER_FIELD = 'CLEAR_SEARCH_PROVIDER_NUMBER_FIELD'

export const sendSmsLinkApp = (number) => dispatch => {
  if (validNumber(number)) {
    dispatch({ type: CHANGE_GET_SMS_LINK_MODAL, isOpen: true })
    dispatch({ type: CHANGE_VALID_SEARCH_PROVIDER_NUMBER_FIELD, isError: false })
    dispatch({ type: CLEAR_SEARCH_PROVIDER_NUMBER_FIELD, clearField: true })
    setTimeout(() => dispatch({ type: CLEAR_SEARCH_PROVIDER_NUMBER_FIELD, clearField: false }, 300))

  }
  else {
    dispatch({ type: CHANGE_VALID_SEARCH_PROVIDER_NUMBER_FIELD, isError: true })
  }
}
