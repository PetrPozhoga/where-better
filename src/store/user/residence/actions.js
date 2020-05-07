import { fetcher } from "../../../utils/fetcher"
import { api } from "../../../api"

export const GET_USER_CITY = 'GET_USER_CITY'

export const getUserCity = () => async dispatch => {
  try {
    let res = await fetcher(api.user.getCity)
    if (res.status !== 200) return
    dispatch({type: GET_USER_CITY, city: res.data})
  } catch (err) {
    console.log(err, 'getUserCity')
  }
}
