import { GET_SINGLE_PROPERTY_SUCCESS, GET_SINGLE_PROPERTY_FAIL } from '../actions/types'

const initialState = {
  listing: [],
  error: null,
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_ALL_FILTERS_SUCCESS:
      return {
        ...state,
        filters: payload,
      }
    case GET_ALL_FILTERS_FAIL:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}
