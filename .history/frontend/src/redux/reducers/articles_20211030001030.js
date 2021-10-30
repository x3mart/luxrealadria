import {
  GET_ALL_ARTICLES_SUCCESS,
  GET_ALL_PROPERTIES_FAIL,
  GET_PROPERTIES_BY_PAGE_SUCCESS,
  GET_PROPERTIES_BY_PAGE_FAIL,
  GET_SINGLE_PROPERTY_SUCCESS,
  GET_SINGLE_PROPERTY_FAIL,
} from '../actions/types'

const initialState = {
  listing: {},
  listings: [],
  error: null,
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_ALL_ARTICLES_SUCCESS:
      return {
        ...state,
        listings: payload,
      }
    case GET_PROPERTIES_BY_PAGE_SUCCESS:
      return {
        ...state,
        listings: payload,
      }
    case GET_SINGLE_PROPERTY_SUCCESS:
      return {
        ...state,
        listing: payload,
      }
    case GET_ALL_PROPERTIES_FAIL:
    case GET_PROPERTIES_BY_PAGE_FAIL:
    case GET_SINGLE_PROPERTY_FAIL:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}
