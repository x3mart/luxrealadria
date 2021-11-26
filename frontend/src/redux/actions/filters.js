import axios from 'axios'
import {
  GET_ALL_FILTERS_SUCCESS,
  GET_ALL_FILTERS_FAIL,
  UPDATE_VALUES_SUCCESS,
} from './types'


export const get_all_filters = () => async dispatch => {
  const lang = localStorage.getItem('language')
  const config = {
    headers: {
      'Accept-Language': lang,
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

export const update_filters = obj => async dispatch => {
  dispatch({
    type: UPDATE_VALUES_SUCCESS,
    payload: obj,
  })
}
