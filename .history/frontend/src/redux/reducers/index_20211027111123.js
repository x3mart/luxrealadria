import { combineReducers } from 'redux'
import auth from './auth'
import home from './home'
import filters from './filters'

export default combineReducers({
  auth,
  home,
  filters,
})
