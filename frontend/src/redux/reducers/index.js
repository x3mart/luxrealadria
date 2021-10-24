import { combineReducers } from 'redux'
import auth from './auth'
import listings from './listings'
import filters from './filters'

export default combineReducers({
  auth,
  listings,
  filters,
})
