import {
  GET_PROPERTIES_PAGE_SUCCESS,
  GET_PROPERTIES_PAGE_FAIL,
  GET_LOGIN_PAGE_SUCCESS,
  GET_LOGIN_PAGE_FAIL,
  GET_REGISTER_PAGE_SUCCESS,
  GET_REGISTER_PAGE_FAIL,
  GET_LEGAL_PAGE_SUCCESS,
  GET_LEGAL_PAGE_FAIL,
} from '../actions/types'

const initialState = {
  properties_page: {},
  login_page: {},
  register_page: {},
  legal_page: {},
}

const pages (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_PROPERTIES_PAGE_SUCCESS:
      return {
        ...state,
        properties_page: payload,
      }
    case GET_LOGIN_PAGE_SUCCESS:
      return {
        ...state,
        login_page: payload,
      }
    case GET_REGISTER_PAGE_SUCCESS:
      return {
        ...state,
        register_page: payload,
      }
    case GET_LEGAL_PAGE_SUCCESS:
      return {
        ...state,
        legal_page: payload,
      }
    case GET_PROPERTIES_PAGE_FAIL:
    case GET_LOGIN_PAGE_FAIL:
    case GET_REGISTER_PAGE_FAIL:
    case GET_LEGAL_PAGE_FAIL:
      return {
        ...state,
      }
    default:
      return state
  }
}
