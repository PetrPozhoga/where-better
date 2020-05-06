import { createReducer } from "../../../utils/store"
import { CHANGE_GET_SMS_LINK_MODAL } from "./actions"

const defaultValue = {
  getSmsLinkModal: false
}

export default createReducer(defaultValue, {
  [ CHANGE_GET_SMS_LINK_MODAL ]: (state, { isOpen }) => ({ ...state, getSmsLinkModal: isOpen })
})
