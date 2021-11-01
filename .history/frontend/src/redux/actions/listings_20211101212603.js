import axios from 'axios'
import {
  GET_SINGLE_PROPERTY_SUCCESS,
  GET_SINGLE_PROPERTY_FAIL,
  GET_ALL_PROPERTIES_SUCCESS,
  GET_ALL_PROPERTIES_FAIL,
  GET_PROPERTIES_BY_PAGE_SUCCESS,
  GET_PROPERTIES_BY_PAGE_FAIL,
  GET_SORTED_LIST_SUCCESS,
  GET_SORTED_LIST_FAIL,
} from './types'

export const load_all_properties = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/properties/`,
      config
    )

    dispatch({
      type: GET_ALL_PROPERTIES_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_ALL_PROPERTIES_FAIL,
    })
  }
}

export const load_properties_by_page = n => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/properties/?page=${n}`,
      config
    )

    dispatch({
      type: GET_PROPERTIES_BY_PAGE_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_PROPERTIES_BY_PAGE_FAIL,
    })
  }
}

export const load_single_property = id => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/properties/${id}/`,
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

export const load_sorted_list = filters => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }

  console.log(filters)

  const getRequest = array => {

    let str = ''

    let arr =
      array &&
      array
        .map(item =>
          item.title === 'price_range' && item.value ? 'max_price=' + item.value : item.value ? item.title + '=' + item.value : ''
        )
        .filter(item => item)

    if (arr.length > 0) {
      str = '?' + arr.join('&')
    }

    return str
  }

  const request = getRequest(filters)

  console.log(request)

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/properties/${request}`,
      config
    )

    dispatch({
      type: GET_SORTED_LIST_SUCCESS,
      payload: res,
    })
  } catch (err) {
    dispatch({
      type: GET_SORTED_LIST_FAIL,
    })
  }
}
