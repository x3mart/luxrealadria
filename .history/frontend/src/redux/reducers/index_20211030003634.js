import { combineReducers } from 'redux'
import auth from './auth'
import home from './home'
import filters from './filters'
import listings from './listings'
import listings from './listings'
import pages from './pages'

export default combineReducers({
  auth,
  home,
  filters,
  listings,
  pages,
})
