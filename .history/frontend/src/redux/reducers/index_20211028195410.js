import { combineReducers } from 'redux'
import auth from './auth'
import home from './home'
import filters from './filters'
import listings from './listings'

export default combineReducers({
  auth,
  home,
  filters,
  listings,
})
