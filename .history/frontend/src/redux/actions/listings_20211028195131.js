import axios from 'axios'
import { GET_SINGLE_PROPERTY_SUCCESS, GET_SINGLE_PROPERTY_FAIL } from './types'

export const load_homepage = id => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/properties/${id}`,
      config
    )

    dispatch({
      type: GET_SINGLE_PROPERTY_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_SINGLE_PROPERTY_FAIL,
    })
  }
}
