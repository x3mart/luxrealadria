import { combineReducers } from 'redux'
import auth from './auth'
import home from './home'
import filters from './filters'
import articles from './articles'
import pages from './pages'

export default combineReducers({
  auth,
  home,
  filters,
  articles,
  listings,
  pages,
})
