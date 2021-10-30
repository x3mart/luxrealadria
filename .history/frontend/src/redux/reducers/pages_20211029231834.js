import {
  GET_PROPERTIES_PAGE_SUCCESS,
  GET_PROPERTIES_PAGE_FAIL,
  GET_LOGIN_PAGE_SUCCESS,
  GET_LOGIN_PAGE_FAIL,
  GET_REGISTER_PAGE_SUCCESS,
  GET_REGISTER_PAGE_FAIL,
} from '../actions/types'

const initialState = {
  properties_page: [],
  login_page: [],
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_PROPERTIES_PAGE_SUCCESS:
      return {
        ...state,
        properties_page: payload,
        login_page: payload,
      }
    case GET_PROPERTIES_PAGE_FAIL:
      return {
        ...state,
      }
    default:
      return state
  }
}
