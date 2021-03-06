import axios from 'axios'
import { GET_HOMEPAGE_SUCCESS, GET_HOMEPAGE_FAIL } from './types'

export const load_propet = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/homepage/`,
      config
    )

    dispatch({
      type: GET_HOMEPAGE_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_HOMEPAGE_FAIL,
    })
  }
}
