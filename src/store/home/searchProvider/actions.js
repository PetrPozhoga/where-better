import { validNumber } from "../../../utils/inputField"

export const CHANGE_GET_SMS_LINK_MODAL = 'CHANGE_GET_SMS_LINK_MODAL'

export const sendSmsLinkApp = (number) => dispatch => {
  if (validNumber(number)) {
    dispatch({ type: CHANGE_GET_SMS_LINK_MODAL, isOpen: true })
  }
}
