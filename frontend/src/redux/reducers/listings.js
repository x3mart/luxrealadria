import {
  ADD_LISTING_SUCCESS,
  ADD_LISTING_FAIL,
  GET_ALL_LISTINGS_SUCCESS,
  GET_ALL_LISTINGS_FAIL,
  GET_LISTING_SUCCESS,
  GET_LISTING_FAIL,
  SORT_LISTING_SUCCESS,
} from '../actions/types'

const initialState = {
  listings: [],
  listing: {},
  error: null,
}

const filterListings = (object, filters) => {
    return object.filter(item =>
      filters.foreach(element =>
        Object.entries(item).includes(Object.entries(element)[0])
      )
    )
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case ADD_LISTING_SUCCESS:
      return {
        ...state,
        listings: [...state.listings, payload],
      }
    case GET_ALL_LISTINGS_SUCCESS:
      return {
        ...state,
        listings: payload,
      }
    case GET_LISTING_SUCCESS:
      return {
        ...state,
        listing: payload,
      }
    case SORT_LISTING_SUCCESS:
      return {
        ...state,
        listings: filterListings(state.listings, payload),
      }
    case ADD_LISTING_FAIL:
    case GET_ALL_LISTINGS_FAIL:
    case GET_LISTING_FAIL:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}
