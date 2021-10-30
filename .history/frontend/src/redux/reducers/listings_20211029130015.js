import { GET_SINGLE_PROPERTY_SUCCESS, GET_SINGLE_PROPERTY_FAIL } from '../actions/types'

const initialState = {
  listing: {},
  listings: {},
  error: null,
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_SINGLE_PROPERTY_SUCCESS:
      return {
        ...state,
        listing: payload,
      }
    case GET_SINGLE_PROPERTY_FAIL:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}
