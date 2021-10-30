import axios from 'axios'
import {
  GET_ALL_FILTERS_SUCCESS,
  GET_ALL_FILTERS_FAIL,
  UPDATE
} from './types'

export const get_all_filters = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/dataforfilters/`,
      config
    )

    dispatch({
      type: GET_ALL_FILTERS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_ALL_FILTERS_FAIL,
      payload: err,
    })
  }
}
