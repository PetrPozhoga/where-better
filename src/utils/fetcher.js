import axios from 'axios'

//https://dos.gde-luchshe.ru
const server = process.env.NODE_ENV === 'development' ? 'https://dos.find-best.ru' : 'https://dos.find-best.ru'

export const fetcher = async ({ method = 'get', url, params, version = '/v1' }) => {
  url = '/api' + version + url
  if (process.title === 'node') url = server + url
  return await axios[ method ](url, { ...params })
}
