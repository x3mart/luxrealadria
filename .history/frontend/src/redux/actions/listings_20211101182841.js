import axios from 'axios'
import {
  GET_SINGLE_PROPERTY_SUCCESS,
  GET_SINGLE_PROPERTY_FAIL,
  GET_ALL_PROPERTIES_SUCCESS,
  GET_ALL_PROPERTIES_FAIL,
  GET_PROPERTIES_BY_PAGE_SUCCESS,
  GET_PROPERTIES_BY_PAGE_FAIL,
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

export const load_sorted_list = obj => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
  const getRequest = (obj) => {
    let str = ''
    if (str.length === 0) {
      str = '?'
    }
    obj && obj.map(item => {
      if(item.value && str === '?') {
        str += `${item.title}=${item.value}`
      } else if (item.value && str === '?') {
        str += `&${item.title}=${item.value}`
      }
    })
    return str
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

