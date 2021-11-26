import { combineReducers } from 'redux'
import auth from './auth'
import home from './home'
import filters from './filters'
import listings from './listings'
import articles from './articles'
import pages from './pages'
import language from './language'

export default combineReducers({
  auth,
  home,
  filters,
  listings,
  articles,
  pages,
  language,
})
