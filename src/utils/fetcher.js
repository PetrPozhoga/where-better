import axios from 'axios'

const server = process.env.NODE_ENV === 'development' ? 'https://dos.find-best.ru/' : 'https://dos.gde-luchshe.ru/'

export const fetcher = async ({ method = 'get', url, params }) => {
  if (!!typeof window ) url = server + url
  return await axios[ method ](url, { ...params })
}
