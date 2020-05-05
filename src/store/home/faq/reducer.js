import { createReducer } from "../../../utils/store"
import { CHANGE_HOME_FAQ_DROPDOWN, CHANGE_FAQ_LIST_MOBILE } from "./actions"

const faqList = [
  {
    title: 'Что делать если пропал интернет и роутер уже много раз перезагружал?',
    description: 'Первым делом. находим наш пароль от сети вайфай. Поднимаем наши документы на предоставление провайдером услуг интернета. Для чего? скажете вы, ведь нам нужно проверить драйвера на работоспособность.',
    isActive: true
  },
  {
    title: 'Что делать если пропал интернет?',
    description: 'Первым делом. находим наш пароль от сети вайфай. Поднимаем наши документы на предоставление провайдером услуг интернета. Для чего? скажете вы, ведь нам нужно проверить драйвера на работоспособность.'
  },
  {
    title: 'Что делать если пропал интернет и роутер уже много раз перезагружал?',
    description: 'Первым делом. находим наш пароль от сети вайфай. Поднимаем наши документы на предоставление провайдером услуг интернета. Для чего? скажете вы, ведь нам нужно проверить драйвера на работоспособность.'
  },
  {
    title: 'Что делать если пропал интернет?',
    description: 'Первым делом. находим наш пароль от сети вайфай. Поднимаем наши документы на предоставление провайдером услуг интернета. Для чего? скажете вы, ведь нам нужно проверить драйвера на работоспособность.'
  },
  {
    title: 'Что делать если пропал интернет и роутер уже много раз перезагружал?',
    description: 'Первым делом. находим наш пароль от сети вайфай. Поднимаем наши документы на предоставление провайдером услуг интернета. Для чего? скажете вы, ведь нам нужно проверить драйвера на работоспособность.'
  },
  {
    title: 'Что делать если пропал интернет?',
    description: 'Первым делом. находим наш пароль от сети вайфай. Поднимаем наши документы на предоставление провайдером услуг интернета. Для чего? скажете вы, ведь нам нужно проверить драйвера на работоспособность.'
  },
]

const defaultValue = {
  faqList,
  faqListMobile: faqList.slice(0, 4),
  showMobileItems: 4
}

export default createReducer(defaultValue, {
  [ CHANGE_HOME_FAQ_DROPDOWN ]: (state, { arr }) => ({ ...state, faqList: arr }),
  [ CHANGE_FAQ_LIST_MOBILE ]: (state, { faqListMobile }) => ({ ...state, faqListMobile }),
})
