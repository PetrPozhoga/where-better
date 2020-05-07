import { validNumber } from "../../utils/inputField"

export const CHANGE_ADVANTAGES_CONSULTATION_MODAL = 'CHANGE_ADVANTAGES_CONSULTATION_MODAL'
export const CHANGE_VALID_CONSULTATION_NUMBER_FIELD= 'CHANGE_VALID_CONSULTATION_NUMBER_FIELD'
export const CLEAR_CONSULTATION_NUMBER_FIELD= 'CLEAR_CONSULTATION_NUMBER_FIELD'

export const CHANGE__CONSULTATION_SEND_MODAL = 'CHANGE__CONSULTATION_SEND_MODAL'
export const CHANGE_CHOOSE_YOR_CITY_MODAL = 'CHANGE_CHOOSE_YOR_CITY_MODAL'

export const toggleModal = (type, isOpen) => {
  return { type, isOpen: isOpen !== undefined ? isOpen : false }
}

export const changeConsultationSendModal = number => dispatch => {
  if (validNumber(number)) {
    dispatch({ type: CHANGE_ADVANTAGES_CONSULTATION_MODAL, isOpen: false })
    setTimeout(() => {
      dispatch({ type: CHANGE__CONSULTATION_SEND_MODAL, isOpen: true })
      dispatch({ type: CHANGE_VALID_CONSULTATION_NUMBER_FIELD, isError: false })
      dispatch({ type: CLEAR_CONSULTATION_NUMBER_FIELD, clearField: true })
      setTimeout(() => dispatch({ type: CLEAR_CONSULTATION_NUMBER_FIELD, clearField: false }, 300))
    }, 300)
  }
  else {
    dispatch({ type: CHANGE_VALID_CONSULTATION_NUMBER_FIELD, isError: true })
  }
}
