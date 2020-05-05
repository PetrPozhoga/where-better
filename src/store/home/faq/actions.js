export const CHANGE_HOME_FAQ_DROPDOWN = 'CHANGE_HOME_FAQ_DROPDOWN'
export const CHANGE_FAQ_LIST_MOBILE = 'CHANGE_FAQ_LIST_MOBILE'

export const changeHomeFaqDropDown = (arr) => ({ type: CHANGE_HOME_FAQ_DROPDOWN, arr })

export const showMoreQuestion = () => (dispatch, getState) => {
  const faq = getState().home.faq
  const showItems = faq.showMobileItems
  const faqList = faq.faqList.slice()
  let faqListMobile = faq.faqListMobile.slice()
  console.log(faqList.slice(faqListMobile.length, faqListMobile.length + showItems))
  faqListMobile = [ ...faqListMobile, ...faqList.slice(faqListMobile.length, faqListMobile.length + showItems) ]
  dispatch({ type: CHANGE_FAQ_LIST_MOBILE, faqListMobile })
}
