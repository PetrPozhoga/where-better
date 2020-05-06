export const CHANGE_GET_SMS_LINK_MODAL = 'CHANGE_GET_SMS_LINK_MODAL'

export const sendSmsLinkApp = (number) => dispatch => {
  console.log(number.replace(/[^0-9]/g, ''))
  if (number.replace(/[^0-9]/g, '').length === 11 ) {
    dispatch({ type: CHANGE_GET_SMS_LINK_MODAL, isOpen: true })
  }
}
