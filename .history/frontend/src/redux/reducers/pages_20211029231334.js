import { GET_PROPERTIES_PAGE_SUCCESS, GET_PROPERTIES_PAGE_FAIL } from '../actions/types'

const initialState = {
  home: [],
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_HOMEPAGE_SUCCESS:
      return {
        ...state,
        home: payload,
      }
    case GET_HOMEPAGE_SUCCESS:
      return {
        ...state,
      }
    default:
      return state
  }
}
