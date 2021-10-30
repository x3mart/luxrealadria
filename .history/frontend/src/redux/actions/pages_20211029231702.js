import axios from 'axios'
import { GET_PROPERTIES_PAGE_SUCCESS, GET_PROPERTIES_PAGE_FAIL, GET_LOGIN_PAGE_SUCCESS
GET_LOGIN_PAGE_FAIL
GET_REGISTER_PAGE_SUCCESS
GET_REGISTER_PAGE_FAIL } from './types'

export const load_properties_page = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/propertypage/`,
      config
    )

    dispatch({
      type: GET_PROPERTIES_PAGE_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_PROPERTIES_PAGE_FAIL,
    })
  }
}
export const load_login_page = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/loginpage/`,
      config
    )

    dispatch({
      type: GET_PROPERTIES_PAGE_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_PROPERTIES_PAGE_FAIL,
    })
  }
}
export const load_register_page = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/registerpage/`,
      config
    )

    dispatch({
      type: GET_PROPERTIES_PAGE_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_PROPERTIES_PAGE_FAIL,
    })
  }
}
