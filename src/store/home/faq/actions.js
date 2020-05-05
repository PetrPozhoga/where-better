export const CHANGE_HOME_FAQ_DROPDOWN = 'CHANGE_HOME_FAQ_DROPDOWN'
export const CHANGE_FAQ_LIST_MOBILE = 'CHANGE_FAQ_LIST_MOBILE'

export const changeHomeFaqDropDown = (arr) => (dispatch, getState) => {
  const width = getState().window.size.windowInnerWidth
  dispatch({
    type: width <= 700 ? CHANGE_FAQ_LIST_MOBILE : CHANGE_HOME_FAQ_DROPDOWN,
    [ width <= 700 ? 'faqListMobile' : 'arr' ]: arr
  })
}

export const showMoreQuestion = () => (dispatch, getState) => {
  const faq = getState().home.faq
  const showItems = faq.showMobileItems
  const faqList = faq.faqList.slice()
  let faqListMobile = faq.faqListMobile.slice()
  console.log(faqList.slice(faqListMobile.length, faqListMobile.length + showItems))
  faqListMobile = [ ...faqListMobile, ...faqList.slice(faqListMobile.length, faqListMobile.length + showItems) ]
  dispatch({ type: CHANGE_FAQ_LIST_MOBILE, faqListMobile })
}
